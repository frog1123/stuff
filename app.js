const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express();  
PORT = 3000;

app.use(express.static(__dirname + '/'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));