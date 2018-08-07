var http = require('http');
var app = require('./app');

const port = process.env.PORT || 3003;
const  server = http.createServer(app);
server.listen(port,()=>{
  console.log(`Listening on port ${port}`)
});
