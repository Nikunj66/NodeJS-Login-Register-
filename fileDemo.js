var fs=require('fs');
var http= require('http');

http.createServer((req,res)=>{
    fs.readFile("nik.html",function(err,data){
        if(err) console.log(err);
        res.writeHead(200,{'Content-Type':"text/html"});
        res.write(data);
        res.end();
    })
}).listen(8080);

