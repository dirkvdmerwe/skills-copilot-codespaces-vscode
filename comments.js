// Create web server
// Run: node comments.js
// Access: http://localhost:3000

var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = 'html/';
var comments = [];

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    console.log('URL path: ' + urlObj.pathname);
    console.log('URL search: ' + urlObj.search);
    console.log('URL query: ' + urlObj.query['q']);
    if (urlObj.pathname === '/comment') {
        console.log("Comment received");
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        comments.push(urlObj.query);
        res.end('Thanks for the comment');
        