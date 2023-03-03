const http = require("http");
const fs = require("fs");
const url = require("url");
const port = "9999";

http.createServer(function(req, res){
    var ip = req.headers['x-forwarded-for'] ||
        req.ip ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || '';
    console.log(ip);
    console.log(url.parse(req.url, true));
    let filePath = url.parse(req.url, true).pathname;

    fs.readFile('.'+filePath, function(err, data){
        if(err){
            return console.error(err);
        }else{
            res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
            res.end(data);
        }
    })
}).listen(port, function(){
    console.log("server running at port 9999");
});