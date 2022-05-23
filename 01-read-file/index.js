const fs = require('fs');
// const path = require('path');

const readableStream = fs.createReadStream('01-read-file/text.txt', 'utf-8');

readableStream.on('data', (chunk) => console.log(chunk));

// fs.readFile('01-read-file/text.txt', 'utf8', function (error, data) {
//   if (error) throw error;
//   console.log(data);
// });
