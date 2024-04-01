const fs = require("fs").promises;
const path = require("path");
// const caminhoArquivo = path.resolve(__dirname, "teste.txt");
const caminhoArquivo = path.resolve(__dirname, "teste.json");

async function lerArquivo(caminhoArquivo) {
  const dados = await fs.readFile(caminhoArquivo, { encoding: "utf-8" });
  console.log(JSON.parse(dados));
}

// const jsonLido = fs
//   .readFile(caminhoArquivo, { encoding: "utf-8" })
//   .then((dados) => {
//     console.log(JSON.parse(dados));
//   })
//   .catch();
lerArquivo(caminhoArquivo);
