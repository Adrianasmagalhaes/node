//CommonJS -> responsável por importar ou exportar os módulos 
// Importando o módulo 'os' do node e colocando em uma variável
const os = require ('os')
// o módulo 'os ' está dentro da variável 'os', desta forma conseguimos acessar as propriedades e métodos deste módulo/objeto
const totalMen= parseInt(os.totalmem()/1024 /1024)
const freMen= parseInt(os.freemem()/1024 /1024)

const memoria ={
    total:  `${totalMen}MB`,
    free:   ` ${freMen}MB`
}

console.table(memoria)

// console.log(`Memória Livre: ${freMen}`, `Total de Memória : ${totalMen}`);
