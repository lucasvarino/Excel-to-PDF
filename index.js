const Reader = require("./src/Reader");
const Processor = require("./src/Processor");
const reader = new Reader();


async function main (){
    const dados = await reader.Read("./Table.csv");
    const dadosProcessados = Processor.Process(dados);
}

main();