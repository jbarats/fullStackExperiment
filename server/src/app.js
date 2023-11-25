console.log("hello")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express() //builds an express server
app.use(morgan('combined')) //log generator combine certain printing arrangement
app.use(bodyParser.json()) //easily parses any json requests sent it
app.use(cors()) //allows for easy client access Enabling is a security risk

require('./routes')(app)


console.log(typeof sequelize)
sequelize.sync({force: true}) //connects the databse
  .then(() => {
    app.listen(process.env.PORT || 8081)
    console.log(`Server started on ${config.port}`)
  })  