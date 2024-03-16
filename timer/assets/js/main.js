const timer = document.querySelector(".timer");
let countTimer;
let segundos = 0;

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    clearInterval(countTimer);
    countTimer = setInterval(function () {
      iniciarTimer();
    }, 1000);
  }

  if (el.classList.contains("pausar")) {
    clearInterval(countTimer);
  }

  if (el.classList.contains("zerar")) {
    clearInterval(countTimer);
    segundos = 0;
    timer.innerHTML = `00:00:00`;
  }
});

const iniciarTimer = () => {
  segundos++;
  const data = new Date(segundos * 1000);
  timer.innerHTML = data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};
