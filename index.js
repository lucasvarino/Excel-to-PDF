const Reader = require("./Reader");
const Processor = require("./Processor");
const leitor = new Reader();


async function main (){
    const dados = await leitor.Read("./Table.csv");
    const dadosProcessados = Processor.Process(dados);
}

main();