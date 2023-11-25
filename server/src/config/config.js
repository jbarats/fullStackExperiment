const path = require('path')
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker', //the second thing is the default fallback
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost', //location of database
            storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
    },
    authentication: { //should only be known by SERVER!
        jwtSecret: process.env.JWT_SECRECT || 'secret'
    }
}