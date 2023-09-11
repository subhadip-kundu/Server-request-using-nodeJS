const http = require('http');

const PORT = 5000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    //About page
    //Contact page
    //product page
    //Rest....-> throw error

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Welcome to home page!');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Welcome to about page!');
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Welcome to contact page!');
    }
    else if (req.url == '/product') {

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }

        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.end(data.toString());
            })
        });

        apiReq.on('error',()=>{
            console.log(e);
        });
        
        apiReq.end();
    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-type', 'text/plain');
        res.end('Server error');
    }

});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
