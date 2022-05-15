const fs = require('fs');

const paths = []

fs.readdirSync('./blogs').forEach(file => { 
    if (file.endsWith('.md')) { 
        paths.push(file);
    }
})

fs.writeFile("test.json", JSON.stringify({ markdowns: paths }), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully emitted index")
    }
});

console.log("hello world");
