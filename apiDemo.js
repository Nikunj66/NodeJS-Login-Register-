var http=require('http');
var data=[
    {id:108,name:'Nikunj Rajpara'},
    {id:107,name:'Kishan Kachhadiya'},
    {id:109,name:'Man Patel'},
]

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);