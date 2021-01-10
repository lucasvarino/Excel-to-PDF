const Reader = require("./src/Reader");
const Processor = require("./src/Processor");
const Table = require("./src/Table");
const reader = new Reader();


async function main (){
    const dados = await reader.Read("./Table.csv");
    const dadosProcessados = Processor.Process(dados);

    const usuarios = new Table(dadosProcessados);
}

main();