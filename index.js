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

// const fs = require('fs');
// const { findSourceMap } = require('module');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files')

// for(let i=0; i<5; i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt', 'This is test file for creating dynamic file')
// }

// fs.readdir(dirPath, (err, listOfFiles)=>{
//     listOfFiles.forEach((item)=>{
//         console.log('this is file', item)
//     })
// })

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath, 'This is a simple text file.', (err)=>{
//     if(!err) console.log('file created succesffully.')
// });

// fs.readFile(filePath, 'utf8', (err, item)=>{
//     if(!err) console.log(item)
// })

// fs.appendFileSync(filePath, ' and thie file name is apple.txt', (err)=>{
//     if(!err) 
//         {
//             console.log('append file is successfully.')
//         }
//         else{
//             console.log(err)
//         }
        
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) {
//         console.log('file is rename successfully.')
//     }
//     else{
//         console.log(err)
//     }
// })


// fs.unlinkSync(`${dirPath}/apple.txt`, (err)=>{
//     if(!err) console.log('file is deleted successfully.')
// })
