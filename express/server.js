const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);
//CRUD - POST, GET, PUT, DEL

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  //? no final define que nao é obrigatório ter um id
  console.log(req.params); //Pega apenas os parametros definidos
  console.log(req.query); //Pega as string depois do ?nome=Joao
  res.send(req.params);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
