const muñecos = [
  `../media/img/inicio/elementos-10.png`,
  `../media/img/inicio/elementos-09.png`,
  `../media/img/inicio/elementos-08.png`,
  `../media/img/inicio/elementos-07.png`,
  `../media/img/inicio/elementos-06.png`,
  `../media/img/inicio/elementos-05.png`
]

const gestionarBannerCookies = () => {

  function aceptarBannerCookies() {
    let btnCookies = document.getElementById(`btn-cookies`)
    btnCookies.addEventListener(`click`, function () {
      document.getElementById(`cookies`).style.display = `none`
      document.body.style.overflow = 'auto';
      localStorage.setItem('cookiesAceptadas', 'true'); 
      location.reload();  
    })
  }

  const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

  if (!cookiesAceptadas) {
    document.body.style.overflow = 'hidden';
    window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);  
    }
  }else{
    document.getElementById(`cookies`).style.display = `none`
  }

  aceptarBannerCookies()
}

const mostrarMuñecos = () => {
  let filaElementos = document.querySelector(".fila-elementos");

  muñecos.forEach((muñeco, id) => {
    let muñecoDiv = document.createElement(`div`);
    muñecoDiv.classList.add(`elemento`)
    muñecoDiv.classList.add(`col-md-2`)
    muñecoDiv.classList.add(`col-xs-2`)
    let elementoMuñeco = document.createElement(`img`);
    elementoMuñeco.classList.add(`muñeco`)
    elementoMuñeco.classList.add(`oculto`)
    elementoMuñeco.classList.add(`n${id + 1}`)
    elementoMuñeco.src = muñeco;
    filaElementos.appendChild(muñecoDiv)
    muñecoDiv.appendChild(elementoMuñeco)

    if (window.innerWidth < 992) {
      muñecoDiv.classList.add(`position-absolute`)
    }
  });

  let logoDiv = document.createElement(`div`);
  logoDiv.classList.add(`elemento-logo`)
  logoDiv.classList.add(`col-md-12`)
  logoDiv.classList.add(`col-xs-12`)
  logoDiv.classList.add(`position-absolute`)
  let elementoLogo = document.createElement(`img`);
  elementoLogo.classList.add(`sushi-paratodos`)
  elementoLogo.classList.add(`oculto`)
  elementoLogo.src = `../media/img/inicio/elementos-11.png`
  filaElementos.appendChild(logoDiv)
  logoDiv.appendChild(elementoLogo)

}

const animacionMuñecos = () => {

  const elementosMuñecos = document.querySelectorAll(`.muñeco`);
  const logosushi = document.querySelector(`.sushi-paratodos`);
  let i = 0;

  if (window.innerWidth >= 992) {
    logosushi.classList.remove(`visible`);
    logosushi.classList.add(`oculto`);

    const animarPG = () => {
      setTimeout(function () {

        const intervalo = setInterval(function () {
          elementosMuñecos[i].classList.add(`visible`)

          i = (i + 1) % elementosMuñecos.length
        }, 500)

        setTimeout(function () {
          clearInterval(intervalo)
          elementosMuñecos.forEach(function (muñeco) {
            muñeco.classList.remove(`visible`);
            muñeco.classList.add(`oculto`);

          })

          setTimeout(function () {
            const logosushi = document.querySelector(`.sushi-paratodos`)
            logosushi.classList.remove(`oculto`);
            logosushi.classList.add(`visible`);

          }, 500)

        }, 5000)

      }, 1000)
    }

    animarPG();

  } else {

    logosushi.classList.remove(`visible`);
    logosushi.classList.add(`oculto`);

    const siguienteMuñeco = () => {

      if (i < elementosMuñecos.length) {

        setTimeout(() => {
          elementosMuñecos[i].classList.add(`visible`);
          setTimeout(() => {
            elementosMuñecos[i].classList.remove(`visible`);
            elementosMuñecos[i].classList.add(`oculto`);
            i++;
            siguienteMuñeco();
          }, 1000);
        }, 500)

      } else {
        logosushi.classList.remove(`oculto`);
        logosushi.classList.add(`visible`);
      }
    };

    siguienteMuñeco();

  }

  setInterval(animacionMuñecos, 18000);

}

const reajustarAnimacion = () => {
  window.addEventListener('resize', function () {
    location.reload();
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
  gestionarBannerCookies();
  mostrarMuñecos();
  animacionMuñecos();
  reajustarAnimacion();
  cambiarColorEnlace();
}

document.addEventListener("DOMContentLoaded", paginaCargada);

