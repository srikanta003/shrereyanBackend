// // Node js basics

// // Intorduction to node.js
// // Installing node.js and npm
// // Working with moduls
// // File system operations
// // understanding HTTP module


// const fs = require("node:fs");

// fs.writeFile('hey.txt','hello welcome to this file',(err ) => {
//    if (err) console.log(err);
//    else console.log('File write successfully');
// }
// )

// fs.appendFile('hey.txt','\nHow are you ?',(err ) => {
//    if (err) console.log(err);
//    else console.log('File Update  successfully');
// }
// )

// fs.rename('hey.txt','hello.txt',(err ) => {
//    if (err) console.log(err)
//    else console.log(`File name change successfully`)
// }
// )

// // fs.copyFile('hello.txt','copy.txt',(err) => {
// //     if (err) console.log(err.message);
// //     else console.log(`File copy successfully`);
// // }
// // )

// fs.unlink('./copy.txt',(err ) => {
//   if (err) console.log(err.message);
//   else console.log(`File removed successfully`);
// }
// )

const http = require('node:http');

const server=http.createServer((req,res ) => {
  res.end('hello world!')
}
)

server.listen(3000) 