const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user : 'root',
    password: 'X9bw9xKf!',
    database: 'my_workout_app'

})

const db = pool;

module.exports = db;