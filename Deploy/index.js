require('dotenv').config()
const express = require(`express`) //equivalent to  import experss from "express" <= can be used instead
const app = express()             //app can be used to call express functionality
const port = 3000                 // this is stored in .env as it sensitive info and you dont want to push it to git hub

app.get("/", (req,res) => {
    res.send('hello world')
})

app.get('/tweeter', (req, res) => {
    res.send('mytweet')
})

app.listen(process.env.port, (req, res) => {
    console.log(`program listning on port ${port}`)
})