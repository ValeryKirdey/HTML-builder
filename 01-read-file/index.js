const fs = require('fs');
const path = require('path');
const { stdout } = process;
const way = './text.txt';
const fileContent = fs.createReadStream(path.join(__dirname, way), 'utf8');
fileContent.on('data', chunk => stdout.write(chunk));