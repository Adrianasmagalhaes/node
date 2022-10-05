const http = require('http')

const hostname= "127.0.0.1"
const porta = 3000

const server = http.createServer((req, res)=>{
    res.statusCode=200
    res.setHeader('Contet-type', 'text/plain; charset=utf-8')
    res.end('Oláaaaaaaaaaa, terraqueos ')
})
server.listen(porta, hostname, () => {
    console.log(`Servidor rodando: http://${hostname}:${porta}/`);
})