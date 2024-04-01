const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
//CRUD - POST, GET, PUT, DEL

app.get("/", (req, res) => {
  res.send(
    `<form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button> Enviar </button>
    </form>`
  );
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  //? no final define que nao é obrigatório ter um id
  console.log(req.params); //Pega apenas os parametros definidos
  console.log(req.query); //Pega as string depois do ?nome=Joao
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body); //O que é enviado no post do endereco
  res.send(`Recebi o body da requisição: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
