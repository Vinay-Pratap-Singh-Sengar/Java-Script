const express = require('express')

// console.log(express)
let app = express()
let PORT = 6060;

app.get('/', (req, res) => {
    res.end("this is my first node js server")
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})