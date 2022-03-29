const fs = require('fs');


const dir = "./output/server/pages/";

export default async function handler(request, response) {
  

  
  var filenames = fs.readdirSync(dir);
  var list = '';
  filenames.forEach(file => {
    console.log(file);
    list += file+"\n";
  });
 

  response.end(list);
  
}
