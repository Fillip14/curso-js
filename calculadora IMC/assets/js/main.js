const formulario = document.querySelector(".form");

formulario.addEventListener("submit", function (e) {
  const peso = document.querySelector(".peso");
  const altura = document.querySelector(".altura");
  const resultado = document.querySelector(".resultado");
  let texto = "";
  e.preventDefault();
  console.log(peso.value, altura.value);

  if (!Number(peso.value) && !Number(altura.value)) {
    texto = "Digite valores númericos";
  } else if (!Number(peso.value)) {
    texto = "Digite valor númerico para peso";
  } else if (!Number(altura.value)) {
    texto = "Digite valor númerico para altura";
  } else {
    const imc = peso.value / (altura.value * altura.value);
    texto = `Seu IMC é: ${imc.toFixed(2)}`;
  }
  resultado.innerHTML = texto;
});
