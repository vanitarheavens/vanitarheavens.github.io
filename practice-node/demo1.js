const http = require('http');
http.createServer((req, res) => {
     console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>;');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.write('</html>');
    res.end();
    });listen(4000,'127.0.0.1',function(){
        console.log('listening on 4000');
    });


    

