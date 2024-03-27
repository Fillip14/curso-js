const formulario = document.querySelector(".form");
let horaCorrigida;
const diaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const organizarHorario = () => {
  const date = new Date();
  const dataOrganizada = [];
  console.log(
    date.toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "long" })
  );
  dataOrganizada.push(date.getDay());
  dataOrganizada.push(date.getDate());
  dataOrganizada.push(date.getMonth());
  dataOrganizada.push(date.getFullYear());
  dataOrganizada.push(date.getHours());
  dataOrganizada.push(date.getMinutes());
  dataOrganizada.push(date.getSeconds());

  dataOrganizada[0] = diaSemana[dataOrganizada[0]];
  dataOrganizada[2] = mes[dataOrganizada[2]];

  dataOrganizada[6] =
    dataOrganizada[6] >= 10 ? dataOrganizada[6] : `0` + dataOrganizada[6];

  horaCorrigida = `${dataOrganizada[0]}, ${dataOrganizada[1]} de ${dataOrganizada[2]} de ${dataOrganizada[3]}. ${dataOrganizada[4]}h ${dataOrganizada[5]}m ${dataOrganizada[6]}s`;
  return horaCorrigida;
};

const horaAtual = () => {
  const horarioAtual = document.querySelector(".horarioAtual");
  horaCorrigida = organizarHorario();
  // horarioAtual.innerHTML = horaCorrigida;
  horarioAtual.innerHTML = new Date().toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "long",
  });
};

setInterval(horaAtual, 500);
horaAtual();
