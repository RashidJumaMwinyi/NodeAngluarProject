const http = require('http')
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    let status_success = res.statusCode = 200
    switch (req.url) {
        case '/':
            path += 'index.html' 
            res.statusCode = 200;          
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end()
            break;     
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    
    // Send an html file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end()
        }
        else {
            res.end(data)
        };
        
        
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening for for request on port 3000');
    
})