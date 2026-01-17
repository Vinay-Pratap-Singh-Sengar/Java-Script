// // what is http ?
// // http stands for "hyper text tranfer protocol". it is an inbuilt module provided by node js that helps you create the server . and we can handle server related things by using this module. 

// const http = require('http')

// let app = http.createServer(abc) // helps to create the server


// // function : it takes the request from the client and process the request and generate the Response.

// function abc(req, res){
//     res.end("this is my first node js server")
// }


// app.listen(5050)


// const http = require('http')

// let app = http.createServer((req, res) => {
//     res.end("this is my first node js server")
// })

// app.listen(8080)


// const http = require('http')

// let app = http.createServer((req, res) => {
//     res.end("this is my first node js server")
// })

// app.listen(7070, ()=>{
//     console.log('Server is running at http://localhost:8080')
// })


const http = require('http')

let PORT = 5050
let app = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("this is home page")
    }
    else if(req.url === "/about"){
        res.end("this is about page")
    }
    else if(req.url === "/contact"){
        res.end("this is contact page")
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.write("404, Resource not found!!!")
        res.end()
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})


