var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
// app.use(serveStatic(__dirname + "/dist"));
//console.log("dirname:::::"+__dirname)
app.use(serveStatic(__dirname + "/index.html"));
var port = process.env.PORT || 30000;
//var port = process.env.PORT || 3000;
var hostname = '127.0.0.1';
console.log("APP.JS IN frontend")
app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
