const express = require('express');
const { Server } = require('http');
const path = require('path');

const app = express();
PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, '/react-app/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));