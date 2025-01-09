const express = require('express');
const mysql= require('mysql');
const cors = require('cors');


const app = express();
const port = 5173;

app.use(cors());
app.use(express.json());

//MySQL connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'X9bw9xKf!',
    database: 'my_workout_app'
  });

  app.get('/', (req, res) => {
    res.send('Hello from Express + MySQL backend!');
  });
  

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

