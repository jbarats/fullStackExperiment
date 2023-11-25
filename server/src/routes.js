const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    //res appears to be a return address. Req will have the content of the sent data

    app.get('/status', (req,res) => {
        res.send({
          message: 'hello world!'
        })
      })

    app.post('/register', 
      AuthenticationControllerPolicy.register,
      AuthenticationController.register )

    app.post('/login',
      AuthenticationController.login)
}