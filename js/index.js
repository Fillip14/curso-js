const meuEscopo = () => {
  const formulario = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = formulario.querySelector(".nome");
    const sobrenome = formulario.querySelector(".sobrenome");
    const peso = formulario.querySelector(".peso");
    const altura = formulario.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas[pessoas.length - 1].nome);
    resultado.innerHTML += `<p>${nome.value}</p>`;
  }

  formulario.addEventListener("submit", recebeEventoForm);
};
meuEscopo();
