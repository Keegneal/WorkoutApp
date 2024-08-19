const express = require('express');
const mysql= require('mysql');
const cors = require('cors');


const app = express();
const port = 5173;

app.use(cors());
app.use(express.json());

//MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'your_database_name'
  });

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})