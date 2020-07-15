const http = require('http')
const server = http.createServer()

// server funciona con eventos
server.on('request', (req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  if (req.method === 'POST' && req.url == '/echo'){
    let body = []
    req
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        body = Buffer.concat(body).toString()
        res.end(body)
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
// Esto es solamente informativo
console.log('Servidor en la Url http://localhost:8001')