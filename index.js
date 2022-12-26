// const http = require('http');
// const data = require('./data');
// const PORT = process.env.PORT || 3000;

// http.createServer((req, resp)=>{
//     resp.writeHead(301, {
//         'Content-Type' : 'application/json'
//     })
//     resp.write(JSON.stringify(data))
//     resp.end()
// }).listen(PORT, ()=>{
//     console.log("Server is running at port 3000...")
// })

// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('Invalid input')
// }

const fs = require('fs');
const { findSourceMap } = require('module');
const path = require('path');
const dirPath = path.join(__dirname, 'files')

// for(let i=0; i<5; i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt', 'This is test file for creating dynamic file')
// }

fs.readdir(dirPath, (err, listOfFiles)=>{
    listOfFiles.forEach((item)=>{
        console.log('this is file', item)
    })
})

