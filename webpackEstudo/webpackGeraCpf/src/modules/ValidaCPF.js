export default class ValidarCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfEnviado", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D/g, ""),
    });
  }

  static geraDigito(numeros, posicao) {
    const soma = numeros
      .split("")
      .filter((valor, indice) => indice < posicao)
      .map((str) => parseInt(str, 10))
      .reduce(
        (acumulador, valor, indice) =>
          acumulador + (posicao + 1 - indice) * valor,
        0
      );

    return 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
  }
}
