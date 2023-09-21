console.log("hello")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() //builds an express server
app.use(morgan('combined')) //log generator combine certain printing arrangement
app.use(bodyParser.json()) //easily parses any json requests sent it
app.use(cors()) //allows for easy client access Enabling is a security risk

app.get('/status', (req,res) => {
  res.send({
    message: 'hello world!'
  })
})

//res appears to be a return address. Req will have the content of the sent data
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)