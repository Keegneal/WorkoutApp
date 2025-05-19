const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./auth.cjs');



const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;


  app.use('/auth', authRoutes);

  app.get('/', (req, res) => {
    res.send('Hello from Express + MySQL backend!');
  });


  

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})


