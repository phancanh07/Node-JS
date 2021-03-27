var http = require('http');
var fs = require('fs');
http.createServer(function (require, reponse) {
    reponse.writeHead('200', {'Content-type': 'text/html'});
    var url = require.url;
    if (url == '/') {
        //truy cap trang chu
        fs.readFile('index.html', function (errol, data) {
            if (!errol) {
                reponse.write(data);
                reponse.end();
                console.log("ddax chay vao");
            } else {
                reponse.end("404 not found");
            }
        })
    }


}).listen(process.env.PORT||'3000');


