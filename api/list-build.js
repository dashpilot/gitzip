const fs = require('fs');


const dir = "./output/server/pages/api/___vc";

export default async function handler(request, response) {
  

  
  var filenames = fs.readdirSync(dir);
  filenames.forEach(file => {
    console.log(file);
  });
 

  response.end('ok');
  
}
