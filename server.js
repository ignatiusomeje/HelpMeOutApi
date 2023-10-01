const http = require('http');
const App = require('./app');

const server = http.createServer(App);

const port = process.env.PORT || 5000
server.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
})