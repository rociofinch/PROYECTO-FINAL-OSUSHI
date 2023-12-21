const moverCentrarMenu = () => {

  let accordion = document.querySelector(`.accordion`);

  accordion.addEventListener(`shown.bs.collapse`, function (event) {
    let accordionItem = event.target.closest(`.accordion-item`);

    if (accordionItem) {
      let topOffset = accordionItem.offsetTop + accordionItem.clientHeight / 2 - window.innerHeight / 2;

      window.scrollTo({ top: topOffset, behavior: `smooth` });

    }
  });
}

const cambiarColorEnlace = () => {

  let urlActual = window.location.href;
  let enlacesNavegacion = document.querySelectorAll('.enlace-offcanvas');

  enlacesNavegacion.forEach(function (enlace) {
    let urlEnlace = enlace.href;

    if (urlActual === urlEnlace) {
      enlace.classList.add('activo');
    }

  });

}

const paginaCargada = () => {
  moverCentrarMenu();
  cambiarColorEnlace();

}

document.addEventListener("DOMContentLoaded", paginaCargada);

