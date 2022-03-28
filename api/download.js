var AdmZip = require("adm-zip");
var zip = new AdmZip();

export default async function handler(request, response) {
var content = "inner content of the file";
zip.addFile("test.txt", Buffer.from(content, "utf8"), "entry comment goes here");
// add local file
// zip.addLocalFile("./hello-world.txt");
zip.addLocalFile("./dist/index.html");

var buffer = zip.toBuffer();

console.log(buffer);
  
// response.status(200).download(buffer);
  
  return response.status(200);
  
}
