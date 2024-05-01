const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel =  require('./models/usermodel');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/UserDetail');

app.post('/register', (req,res)=>{
      userModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err))
      // const {name, email, password} =  req.body;
      // const form = new userModel({name, email, password});
      // form.save();
      
})

app.listen(4000,()=>{
  console.log('Server is running')
})