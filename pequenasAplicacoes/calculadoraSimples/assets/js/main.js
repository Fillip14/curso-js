/*
const criaCalculadora = () => {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta); //Extremante perigoso pois pode interpretar qualquer codigo digitado

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
};

const calculadora = criaCalculadora();
calculadora.inicia();
*/

//Com construtora e refatorado
function Criacalculadora() {
  const display = document.querySelector(".display");

  this.inicia = () => {
    cliqueBotoes();
    capturaEnter();
  };

  capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        realizaConta();
      }
    });
  };

  realizaConta = () => {
    try {
      const conta = eval(display.value); //Extremante perigoso pois pode interpretar qualquer codigo digitado

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) addNumDisplay(el.innerText);
      if (el.classList.contains("btn-clear")) clearDisplay();
      if (el.classList.contains("btn-del")) apagaUm();
      if (el.classList.contains("btn-eq")) realizaConta();
      display.focus();
    });
  };

  addNumDisplay = (valor) => (display.value += valor);
  clearDisplay = () => (display.value = "");
  apagaUm = () => (display.value = display.value.slice(0, -1));
}

const calculadora = new Criacalculadora();
calculadora.inicia();
