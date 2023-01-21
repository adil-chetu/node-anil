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

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`
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


//Draw back of asynchronous programming language
// let a = 20;
// let b = 0;

// setTimeout(()=>{
//     b = 10;
// }, 2000);

// console.log(a+b);

//Handle Asynchronous Data

// let a = 10;
// let b = 0;

// let waitinData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         b = 20;
//         resolve(b);
//     }, 2000);
// });

// waitinData.then((data)=>{
//     b = data;
//     console.log(a+b)
// })


// const express = require('express');
// const app = express();


// // Simple request time logger
// app.use((req, res, next) =>{
//     console.log("A new request received at " + Date.now());
//     next();
// })

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

// app.get('/home', (req, res) =>{
//     res.send('Home page.')
// });

// app.get('/about', (req, res)=>{
//     res.send('About page')
// });

// app.get('/books', (req, res)=>{
//     console.log(req.query.name);
//     res.send("Welcome, This is a book page")
// });

// app.get('*', (req, res)=>{
//     res.send('404! This is an invalid URL.')
// })

// app.listen(4500, ()=> console.log('Example app listening on port 3000'));




// dbConnect().then((resp)=>{
//     let result = resp.find().toArray();
//     result.then((res)=>{
//         console.log(res)
//     })
// })
// const dbConnect = require('./mongodb');
// const main = async ()=>{
//     let data =  await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{

//     const url = req.url;
//     const method = req.method;
//     if(url === '/'){
//         res.write('<html>')
//         res.write('<head><title>My First Page</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>')
//         return res.end()
//     }

//     if(url === '/message' && method === 'POST'){
//         const body = [];
//         req.on('data', (chunk)=>{
//             console.log(chunk)
//             body.push(chunk);
//         });

//         return req.on('end', ()=>{
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody)
//             const message = parseBody.split("=")[1];
//             fs.writeFile('message.txt', message, (err)=>{
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             });
            
//         });
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>')
//     res.write('<head><title>My First Page</title></head>')
//     res.write('<body><h1>Hello from my node js server</h1></body>')
//     res.write('</html>')
//     res.end()
// });

// server.listen(3000);

const http = require('http');
const routes = require('./route');
const server = http.createServer(routes.handler);
server.listen(3000);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res)=>{
//     const url = req.url;
//     const method = req.method;
    
//     if(url === '/'){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>First Assignment</title></head>')
//         res.write('<body>')
//         res.write('<form action="/create-user" method="POST">')
//         res.write('<input type="text" name="username" placeholder="Username">')
//         res.write('<button type="submit">Send</button>')
//         res.write('</form>')
//         res.write('</body>')
//         res.write('</html>')
//         return res.end()
//     }

//     if(url === '/create-user' && method==='POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk)
//         })
//         req.on('end', () =>{
//             parsedBody = Buffer.concat(body).toString().split('=')[1];
//             fs.appendFile('users.txt', parsedBody, (err)=>{
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             });
//         })
        
//     }

//     if(url === '/users'){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>First Assignment</title></head>')
//         res.write('<body>')
//         res.write('<ul>')
//         res.write('<li>User1</li>')
//         res.write('<li>User2</li>')
//         res.write('</ul>')
//         res.write('</body>')
//         res.write('</html>')
//         return res.end()
//     }
// });

// server.listen(3000)