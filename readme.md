# Leitura e escrita de tabelas do Excel

Esse projeto consiste em ler uma planilha do Excel e transformar esses dados em uma tabela em HTML ou em um arquivo PDF.

##Instalação das dependências
Para utilizar, clone o repositório e digite o seguinte comando em seu terminal
```
npm install
```
Esse comando irá instalar todas as dependências necessárias para que tudo funcione corretamente.

##Utilização
No projeto existe uma tabela chamada **Table.csv**, substitua essa tabela por uma de sua prefência. 

Obs.: é necessário que a sua tabela também esteja no formato .csv , pois o conversor utiliza a estrutura desse arquivo para seu funcionamento

Após substituir a tabela, você deve substituir o arquivo **Table.ejs** com o conteúdo que queira usar em seu arquivo PDF ou HTML, colocando seus dados de forma dinâmica com o ejs.

Caso não saiba utilizar o ejs, leia a [documentação oficial](https://ejs.co/).

Após isso, digite no seu terminal

```
node index.js
```
E o script irá criar no diretório atual 2 arquivos: sua tabela em formato HTML e em PDF

Caso haja algum bug ou melhorias no código, peço que abra uma issue ou faça um pull request, estou a cada dia tentando melhorar mais o meu código.


