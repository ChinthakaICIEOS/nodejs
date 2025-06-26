const http = require("http");

function requestListener(request,response){
    console.log(request);
}

const server =  http.createServer(requestListener);

server.listen(3000);