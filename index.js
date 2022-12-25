const http = require('http');
const data = require('./data');
const PORT = process.env.PORT || 3000;

http.createServer((req, resp)=>{
    resp.writeHead(301, {
        'Content-Type' : 'application/json'
    })
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(PORT, ()=>{
    console.log("Server is running at port 3000...")
})