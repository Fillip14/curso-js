const alerta = alert("Com a nossa mensagem."); //Alerta
const confirma = confirm("Deseja realmente apagar?"); //Confirm dentro do window
const nome = prompt("Digite o seu nome:"); //Prompot dentro do window

console.log("Alerta ", alerta, "Confirmado?", confirma, "Nome: ", nome);
document.body.innerHTML += `Alerta: ${alerta}. Confirmou? ${confirma}. O seu nome é: ${nome}`;
