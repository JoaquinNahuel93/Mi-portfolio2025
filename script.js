function toggleContacto() {
  var lista = document.getElementById("listaContacto");
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}
ScrollReveal().reveal(".revelar", {
  delay: 200,
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  opacity: 0,
  reset: true,
});
const modal = document.getElementById("modalProyecto");
const botonAbrir = document.getElementById("abrirModal");
const botonCerrar = document.getElementsByClassName("cerrar")[0];

botonAbrir.onclick = function () {
  modal.style.display = "block";
};

botonCerrar.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.getElementById("habilidad-js").addEventListener("click", function () {
  const contadorContainer = document.getElementById("contador-container");
  contadorContainer.style.display = "block";
});

document.getElementById("incrementar").addEventListener("click", function () {
  let contador = document.getElementById("contador");
  contador.textContent = parseInt(contador.textContent) + 1;
});

document.getElementById("decrementar").addEventListener("click", function () {
  let contador = document.getElementById("contador");
  if (parseInt(contador.textContent) > 0) {
    contador.textContent = parseInt(contador.textContent) - 1;
  }
});
