// content of index.js
const http = require('http')  
const port = 3004
var count=1;
const middleware = (request, response) =>  {
  count++;
  response.setHeader('Content-Type','application/json; charset=utf-8');
  response.end(JSON.stringify({count:count}));
} 
const requestHandler = (req, res) => (req.url == '/count')? middleware(req,res):res.end();
const server = http.createServer(requestHandler)
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})