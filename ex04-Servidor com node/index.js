const {createServer} = require('http')

let server = createServer((request, response)=>{
    
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
    <h1>Hello world</h1>
    <p>Primeiro servidor com node.js</p>
    `)
    response.end()
})

server.listen(8000)

console.log('funcionando a porta 8000')