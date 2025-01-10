const express = require('express');
const mysql= require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

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

app.get('/my_workout_app',(req,res)=> {

  db.query('SELECT 1+1 AS solution', (err, results) =>{
    if(err){
      return res.status(500).json({error:err});
    }
    res.json({result: results[0].solution})
  })

})

