class ValidarCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfEnviado", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado,
    });
  }

  verificarCPF() {
    const cpfLimpo = this.cpfEnviado.replace(/\D/g, "").split("");
    const digito1 = ValidarCPF.somaNumeros(cpfLimpo, 9);
    const digito2 = ValidarCPF.somaNumeros(cpfLimpo, 10);

    if (
      digito1 === parseInt(cpfLimpo[9]) &&
      digito2 === parseInt(cpfLimpo[10]) &&
      this.cpfEnviado.length === 11
    ) {
      return true;
    } else {
      return false;
    }
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
}
