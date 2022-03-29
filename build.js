const fs = require("fs");
fs.writeFileSync("./api/zip/dynamic.txt", "This file is the result of a build step");
console.log("build step completed");
