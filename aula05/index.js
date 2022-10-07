const http = require('http')

http.createServer((req, res)=>{
    if (req.url ==="/") {
      res.end( "Bem vindo")
    }else if(req.url ==="/livros"){
        res.end( "Lista de livros")
    
    }
    console.log("UR: ", req.url);
}).listen(8001)