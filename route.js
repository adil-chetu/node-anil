const fs = require('fs');

const requestHandler = () => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>First Assignment</title></head>')
        res.write('<body>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username" placeholder="Username">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/create-user' && method==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () =>{
            parsedBody = Buffer.concat(body).toString().split('=')[1];
            fs.appendFile('users.txt', parsedBody, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })  
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>First Assignment</title></head>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>User1</li>')
        res.write('<li>User2</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

}

module.exports = requestHandler;