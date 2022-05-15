const fs = require("fs");

console.log("Creating blog index.");

const paths = [];

fs.readdirSync("./blogs").forEach((file) => {
    if (file.endsWith(".md")) {
        paths.push(file);
    }
});

fs.writeFile("index.json", JSON.stringify({ markdowns: paths }), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully emitted index to index.json.");
    }
});
