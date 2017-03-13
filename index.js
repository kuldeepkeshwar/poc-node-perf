const http = require('http')  
const middleware = require('./middleware');  
const port = 3003
const requestHandler = (req, res) => (req.url == '/test')? middleware(req,res):res.end();
const server = http.createServer(requestHandler)
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})