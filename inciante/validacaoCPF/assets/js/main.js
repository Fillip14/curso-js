// const inputCPF = document.querySelector(".input-cpf");
// const btnValidar = document.querySelector(".validar");
// const pValido = document.querySelector(".valido");

// inputCPF.addEventListener("input", (event) => {
//   event.target.value = formatarNumero(event.target.value.replace(/\D/g, ""));
// });

// btnValidar.addEventListener("click", (event) => verificarCPF());

// document.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") verificarCPF();
// });

// const verificarCPF = () => {
//   const cpfLimpo = inputCPF.value.replace(/\D/g, "").split("");
//   const digito1 = somaNumeros(cpfLimpo, 9);
//   const digito2 = somaNumeros(cpfLimpo, 10);

//   if (
//     digito1 === parseInt(cpfLimpo[9]) &&
//     digito2 === parseInt(cpfLimpo[10]) &&
//     inputCPF.value.length > 11
//   ) {
//     pValido.innerHTML = "CPF válido";
//   } else {
//     pValido.innerHTML = "CPF inválido";
//   }
// };

// const formatarNumero = (numero) => {
//   if (numero.length > 9) return numero.slice(0, 9) + "-" + numero.slice(9, 11);
//   return numero;
// };

// const somaNumeros = (numeros, posicao) => {
//   const soma = numeros
//     .filter((valor, indice) => indice < posicao)
//     .map((str) => parseInt(str, 10))
//     .reduce(
//       (acumulador, valor, indice) =>
//         acumulador + (posicao + 1 - indice) * valor,
//       0
//     );

//   return 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
// };

const inputCPF = document.querySelector(".input-cpf");
const btnValidar = document.querySelector(".validar");
const pValido = document.querySelector(".valido");

class ValidarCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfEnviado", {
      writable: true,
      enumerable: true,
      configurable: false,
      value: cpfEnviado,
    });
  }

  formatarNumero(numero) {
    if (numero.length > 9) {
      this.cpfEnviado = numero.slice(0, 9) + "-" + numero.slice(9, 11);
    } else {
      this.cpfEnviado = numero;
    }
    inputCPF.value = this.cpfEnviado;
  }

  static somaNumeros(numeros, posicao) {
    const soma = numeros
      .filter((valor, indice) => indice < posicao)
      .map((str) => parseInt(str, 10))
      .reduce(
        (acumulador, valor, indice) =>
          acumulador + (posicao + 1 - indice) * valor,
        0
      );

    return 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
  }

  verificarCPF() {
    console.log(this.cpfEnviado);
    const cpfLimpo = this.cpfEnviado.replace(/\D/g, "").split("");
    const digito1 = ValidarCPF.somaNumeros(cpfLimpo, 9);
    const digito2 = ValidarCPF.somaNumeros(cpfLimpo, 10);

    if (
      digito1 === parseInt(cpfLimpo[9]) &&
      digito2 === parseInt(cpfLimpo[10]) &&
      this.cpfEnviado.length > 11
    ) {
      pValido.innerHTML = "CPF válido";
    } else {
      pValido.innerHTML = "CPF inválido";
    }
  }
}

const validacpf = new ValidarCPF();

inputCPF.addEventListener("input", (event) =>
  validacpf.formatarNumero(event.target.value.replace(/\D/g, ""))
);

btnValidar.addEventListener("click", (event) => validacpf.verificarCPF());

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") validacpf.verificarCPF();
});
