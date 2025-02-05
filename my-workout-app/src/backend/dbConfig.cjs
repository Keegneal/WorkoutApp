const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user : 'root',
    password: 'X9bw9xKf!',
    database: 'my_workout_app'

})

const db = pool.promise()

module.exports = db;