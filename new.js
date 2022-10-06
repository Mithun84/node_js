const www = require('http');
www.createServer((req,res)=>{
    res.write('<h1>Success</h1>');
    res.end();
}).listen(5000);