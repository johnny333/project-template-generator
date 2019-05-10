const express = require('express')
const app = express()
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('src/properties.ini');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./modules'))

app.listen(properties.get('server.port'), () => console.log(`Listening on port ${properties.get('server.port')}`))
