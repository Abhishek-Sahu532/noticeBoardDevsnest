const express = require('express');
const app = express();
const router = require('./routes/board')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const PORT = 1980;

app.use('/', router)



app.listen(PORT, ()=>{
  console.log('App is connected on port ', PORT)
})