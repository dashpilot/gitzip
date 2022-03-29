const fs = require('fs');
const { join } = require('path')
var AdmZip = require("adm-zip");
var zip = new AdmZip();

export default async function handler(request, response) {
  
  var content = "inner content of the file";
  zip.addFile("at-runtime.txt", Buffer.from(content, "utf8"), "entry comment goes here");
  
  
  var filenames = fs.readdirSync(join(__dirname, '..', 'zip'));
  filenames.forEach(file => {
    console.log(file);
    zip.addLocalFile(join(__dirname, '..', 'zip', file));
  });
 
  
  // zip.addLocalFile("./dist/index.html");

  var buffer = zip.toBuffer();
  
  response.setHeader("Content-Type", "application/octet-stream");
  response.setHeader("Content-Disposition", "inline;filename=myfile.zip");

  response.end(buffer);
  
}
