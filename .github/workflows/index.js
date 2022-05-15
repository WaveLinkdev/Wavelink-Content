const fs = require('fs');

fs.writeFile("test.json", JSON.stringify({ message: "hello world" }), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully emitted index")
    }
});

console.log("hello world");
