const http = require("http");

const server =  http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>This is NodeJs Server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h2>Hey... This is the NodeJs Server...</h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);