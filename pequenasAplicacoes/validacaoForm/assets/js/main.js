class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const campoValido = this.camposValidos();
    const senhaValida = this.senhasValidas();
    console.log(campoValido, senhaValida);
    if (campoValido && senhaValida) {
      alert("Formulario enviado");
      this.formulario.submit();
    }
  }

  senhasValidas() {
    let valido = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valido = false;
      this.criarErro(
        senha,
        "Campos senha e repetir senha precisam ser iguais."
      );
      this.criarErro(
        repetirSenha,
        "Campos senha e repetir senha precisam ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criarErro(senha, "Senha precisa estar entre 6 e 12 caracteres.");
    }

    return valido;
  }

  camposValidos() {
    let valido = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criarErro(campo, `Campo ${label} não pode estar em branco`);
        valido = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valido = false;
      }
      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valido = false;
      }
    }

    return valido;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valido = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criarErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
      valido = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criarErro(
        campo,
        "Usuário precisa conter apenas letras e/ou números."
      );
      valido = false;
    }
    return valido;
  }

  validaCPF(campo) {
    const cpf = new ValidarCPF(campo.value);

    if (!cpf.verificarCPF()) {
      this.criarErro(campo, "CPF inválido");
      return false;
    }
    return true;
  }

  criarErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
