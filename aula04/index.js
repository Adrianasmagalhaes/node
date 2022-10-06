const fs = require("fs");
const os = require("os");
const path = require("path")
// O userInfo é uma função dentro de OS
let print = os.userInfo();
// console.log(print);

//O JSON.stringify é Um objeto intrínseco que fornece funções para converter valores JavaScript de e para o formato JavaScript Object Notation (JSON).

fs.appendFile(path.join(__dirname, 'user.txt' ), JSON.stringify(print), () => {
  // console.log('ok')
});

