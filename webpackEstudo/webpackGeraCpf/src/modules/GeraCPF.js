import ValidarCPF from "./validaCPF";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatarCpf(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidarCPF.geraDigito(cpfSemDigito, 9);
    const digito2 = ValidarCPF.geraDigito(cpfSemDigito + digito1, 10);

    return this.formatarCpf(cpfSemDigito + digito1 + digito2);
  }
}
