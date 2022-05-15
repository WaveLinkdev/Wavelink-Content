const fs = require('fs');

fs.writeFile("test.json", JSON.stringify({message: "hello world"}));

console.log("hello world");
