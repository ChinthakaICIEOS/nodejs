const http = require("http");
const fs = require("fs");

const server =  http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write("<html>");
        res.write("<head>");
        res.write("<title>This is NodeJs Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write('<form action="/text" method="POST">');
        res.write('<input type="text">');
        res.write('<button type="submit">submit</button>');
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if(url === "/text" && method === "POST"){
        fs.writeFileSync("text.txt","DUMMY");
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }

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