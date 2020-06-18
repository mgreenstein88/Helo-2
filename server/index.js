require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const SERVER = 3434
const ctrl = require('./controller')


const {CONNECTION_STRING} = process.env

app.use(express.json())

app.post('/auth/register', ctrl.register)
app.get('/posts/user/:id', ctrl.getPosts)

massive({
    ssl: {rejectUnauthorized: false},
    connectionString: CONNECTION_STRING
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.listen(SERVER, () => {
    console.log(`Server running on port ${SERVER}`)
})