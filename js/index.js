const numero = Number(prompt("Digite um número:"));
const numeroDigitado = document.getElementById("seuNumero");
const textoSelecionado = document.getElementById("texto");
console.log(numeroDigitado);

numeroDigitado.innerHTML = numero;
// console.log(numeroDigitado);
textoSelecionado.innerHTML += `<p>Raiz quadrada é ${numero ** (1 / 2)}. </p>`;
textoSelecionado.innerHTML += `<p>É inteiro? ${Number.isInteger(numero)}. </p>`;
textoSelecionado.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}. </p>`;
textoSelecionado.innerHTML += `<p>Arrendonda pra baixo ${Math.ceil(
  numero
)}. </p>`;
textoSelecionado.innerHTML += `<p>Arrendonda pra cima ${Math.round(
  numero
)}. </p>`;
textoSelecionado.innerHTML += `<p>Duas casas decimais ${numero.toFixed(
  2
)}. </p>`;
