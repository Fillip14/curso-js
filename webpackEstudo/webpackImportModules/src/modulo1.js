export const nome = "Luiz";
export const sobrenome = "Otavio";
export const idade = 30;
const cpf = 43049;

// export function soma(x, y) {
//   return x + y;
// }
// export default function soma(x, y) {
//   return x + y;
// }

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export default (x, y) => x * y;

// export { nome as default };
// export { nome, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };
