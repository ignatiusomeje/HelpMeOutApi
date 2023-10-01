const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

const {videoRoutes} = require('./routes')


const App = express();

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true}))
App.use(cors('*'));

App.use('/api/v1', videoRoutes)

App.all('*', (req, res)=>{
  res.status(404).json({
    status: 404,
    message: 'Page Not Found'
  })
})


module.exports = App
