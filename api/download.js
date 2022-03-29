const fs = require('fs');
var AdmZip = require("adm-zip");
var zip = new AdmZip();

export default async function handler(request, response) {
  
  var content = "inner content of the file";
  zip.addFile("test.txt", Buffer.from(content, "utf8"), "entry comment goes here");
  
  /*
  var filenames = fs.readdirSync("./dist/");
  filenames.forEach(file => {
    console.log(file);
    
  });
  */
  
  zip.addLocalFile("./dist/index.html");

  var buffer = zip.toBuffer();
  
  response.setHeader("Content-Type", "application/octet-stream");
  response.setHeader("Content-Disposition", "inline;filename=myfile.zip");

  response.end(buffer);
  
}
