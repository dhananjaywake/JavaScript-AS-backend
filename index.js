require('dotenv').config()
const express = require("express")

const app = express ()

const port = 4000;

app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.get('/twitter', (req, res) => {
    res.send("Hello Dhananjay")
})

app.get('/login', (req, res) =>{
    res.send("<h1>Please login to backend practice</h1>")
})

app.get('/youtube', (req, res) => {
    res.send('<h2>javascript for backend</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listeningon port ${port}`)
} )