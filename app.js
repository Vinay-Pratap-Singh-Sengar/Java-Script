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
        res.writeHead(404, {"content-type": "text/plain"});
        res.write("<h1>404, Resource not found!!!</h1>")
        res.end()
       
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})


//res.writeHead() : this method is used to send the response headers to the client.
    // response header contain two things mainly :
    //     - the status code 
    //     - content-type

// res.write() : this method is used to send the response body to the client.

// res.end() :  this method is used to end the response process.
// --------------------------------------------------------------------------------
// content-type : 'text/html' --- it is way of telling the browser how it should be interpreted and display the response .

// content-type : 'application/json' --- this way we used to send back JSON data as a response 

// content-type : 'text/css' --- this way we used to send back css as a response

// content-type : 'text/javascript' --- this way we used to send back java script code as a response.


// why it is important to set the content type ? 
// by setting the content type helps us to determine how the web browser interprets the response 