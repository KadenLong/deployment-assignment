const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
})
app.get('/reset', (req, res) => {
    res.sendFile(path.join(__dirname, '../reset.css'))
})
app.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, '../ad73e17b7a1d4b64a043cbc89064def0.png'))
})
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})