// import { senhaRandom } from "./geraNumeroRandom";
// import { senhaRandom } from "./geraNumeroRandom";
import senhaRandom from "./geraNumeroRandom";

const qtCaracteres = document.querySelector(".qt-caracteres");
const adcNumero = document.querySelector(".adc-numeros");
const adcMaiuscula = document.querySelector(".adc-maiusculas");
const adcMinuscula = document.querySelector(".adc-minusculas");
const adcSimbolo = document.querySelector(".adc-simbolos");
const exibirSenha = document.querySelector(".senha-gerada");
const btnGeraSenha = document.querySelector(".gerar-senha");

export default () => {
  btnGeraSenha.addEventListener("click", () => {
    exibirSenha.innerHTML = gera();
  });
};

const gera = () => {
  const senha = senhaRandom(
    qtCaracteres.value,
    adcNumero.checked,
    adcMaiuscula.checked,
    adcMinuscula.checked,
    adcSimbolo.checked
  );

  return senha || "Nada selecionado";
};
