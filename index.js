const express = require('express')
const app = express()
const port = 3090

//to setup database
const configureDB = require('./config/database')
configureDB()

//to setup routes
const routes = require('./config/routes')

app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
    console.log('listening on port', port)
})