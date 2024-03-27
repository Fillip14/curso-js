const caracteres = "abcdefghijklmnopqrstuvwxyz";
const caracteresEspeciais = ",.;~^[]{}!@#$%*()_+=-";
const numeros = "0123456789";
// const numeros = String.fromCharCode(48);

export default (
  qtdaracteres,
  adcNumeros,
  adcMaiuscula,
  adcMinuscula,
  adcSimbolo
) => {
  let carateresUsar = "";
  let senhaCriada = "";

  if (adcNumeros) carateresUsar += numeros;
  if (adcMaiuscula) carateresUsar += caracteres.toUpperCase();
  if (adcMinuscula) carateresUsar += caracteres.toLocaleLowerCase();
  if (adcSimbolo) carateresUsar += caracteresEspeciais;

  for (let i = 0; i < qtdaracteres; i++) {
    let indiceAleatorio = Math.floor(Math.random() * carateresUsar.length);
    senhaCriada += carateresUsar.charAt(indiceAleatorio);
  }

  return senhaCriada;
};
