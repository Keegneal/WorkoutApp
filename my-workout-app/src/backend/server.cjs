const express = require('express');
const mysql= require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config//({path: require('path').resolve(__dirname, '../../.env')});




const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;


//MySQL connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'my_workout_app'
  });

db.getConnection((err, connection) => {
  if(err){
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  connection.release();
});


  app.get('/', (req, res) => {
    res.send('Hello from Express + MySQL backend!');
  });
  

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

app.get('/my_workout_app',(req,res)=> {

  db.query('SELECT 1+1 AS solution', (err, results) =>{
    if(err){
      return res.status(500).json({error:err});
    }
    res.json({result: results[0].solution})
  })

})

