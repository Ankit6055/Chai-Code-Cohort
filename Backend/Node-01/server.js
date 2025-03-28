const express = require('express');
const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('Incoming Req Aaya....')
    res.sendDate('Ye lo ji response')
});

server.listen(8000, function() {
    console.log(`Server Started`);
})
