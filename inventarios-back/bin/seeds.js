require('dotenv').load();
const mongoose = require('mongoose')
const User = require('../models/user-model')

const user = {
  name: 'supervisor1',
  email: 's1@s1.com',
  role: 'SUPERVISOR'
}

mongoose.connect(process.env.DB)
.then(() => User.register(user, 's1'))
.catch(err => console.log(err))