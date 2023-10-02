const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

const {videoRoutes} = require('./routes');
const { default: mongoose } = require('mongoose');

// const connection = process.env.DB_CONNECTION || mongodb://localhost:27017
process.env.DB_CONNECTION = 'mongodb+srv://mrexcel153:jesuse153@cluster0.k7b25lj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(process.env.DB_CONNECTION || "mongodb://127.0.0.1:27017/Videos", {useNewURLParser: true}).then(result => console.log('connected to the DB successfully')).catch(err => console.log(err))

const App = express();

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true}))
App.use(cors('*'));

App.use('/', videoRoutes)

App.all('*', (req, res)=>{
  res.status(404).json({
    status: 404,
    message: 'Page Not Found'
  })
})


module.exports = App
