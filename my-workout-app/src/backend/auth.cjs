const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

// Add debugging to see what's happening with environment loading
//console.log('Current directory:', __dirname);
//console.log('ENV file path:', path.resolve(__dirname, '../../.env'));

// Try both approaches to loading env vars
require('dotenv').config();  // Try default location first
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });  // Then try specific path

// Add debugging to see if environment variables are loaded
console.log('Environment check:', {
    JWT_SECRET_EXISTS: !!process.env.JWT_SECRET,
    JWT_SECRET_LENGTH: process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0
});

const db = require('./dbConfig.cjs');

const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(500).json({ message: 'Authentication error' });
    }
};

router.post('/signup', async (req, res) => {
    console.log("🔹 Received Signup Request:", req.body);
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user exists - using promise-based query
        const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user - using promise-based query
        await db.query(
            'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
            [email, hashedPassword, name]
        );

        return res.status(201).json({ message: 'User sign-up successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: 'Server error during signup' });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const findUserQuery = 'SELECT * FROM users WHERE email = ?';
    
    // Check if JWT_SECRET is configured
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not configured in environment variables');
        return res.status(500).json({ message: 'Server configuration error' });
    }
    
    try {
        // Using the promise-based query; this returns an array [rows, fields]
        const [results] = await db.query(findUserQuery, [email]);
        
        if (results.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }
        
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }
    
        const token = jwt.sign(
            { userId: user.id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'DB server error' });
    }
});

router.get('/user', authenticateToken, async (req, res) => {
    try {
        console.log('1. User from token:', req.user);
        console.log('2. Looking for userId:', req.user.userId);

        const [results] = await db.query(
            'SELECT name, email FROM users WHERE id = ?',
            [req.user.userId]
        );
        
        console.log('3. Database results:', results);

        if (results.length > 0) {
            const userData = {
                name: results[0].name,
                email: results[0].email
            };
            console.log('4. Sending back:', userData);
            res.json(userData);
        } else {
            console.log('5. No user found for ID:', req.user.userId);
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('6. Error in /user route:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
