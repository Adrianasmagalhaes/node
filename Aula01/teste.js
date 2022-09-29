//CommonJS -> responsável por importar ou exportar os módulos
// Importando o módulo 'os' do node e colocando em uma variável
const os = require("os");
// o módulo 'os ' está dentro da variável 'os', desta forma conseguimos acessar as propriedades e métodos deste módulo/objeto

setInterval(() => {
  const totalMen = parseInt(os.totalmem() / 1024 / 1024);
  const freMen = parseInt(os.freemem() / 1024 / 1024);
  const percent = parseInt((freMen/totalMen )*100)

  const memoria = {
    total: `${totalMen}MB`,
    free: ` ${freMen}MB`,
    percent: `${percent}%`,
  }
  console.clear();
  console.table(memoria);
}, 1000);

// console.log(`Memória Livre: ${freMen}`, `Total de Memória : ${totalMen}`);
