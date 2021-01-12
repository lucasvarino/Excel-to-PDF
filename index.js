const Reader = require("./src/Reader");
const Processor = require("./src/Processor");
const Table = require("./src/Table");
const HtmlParser = require("./src/HtmlParser");
const Writer = require("./src/Writer");

const reader = new Reader();
const escritor = new Writer();

async function main (){
    const dados = await reader.Read("./Table.csv");
    const dadosProcessados = Processor.Process(dados);

    const usuarios = new Table(dadosProcessados);
    const html = await HtmlParser.parse(usuarios);

    escritor.Write("teste.html", html);
}

main();