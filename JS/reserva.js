const cargarMapa = () => {
    let lat = 37.17445
    let long = -3.59590
    let map = L.map('mapa').setView([lat, long], 19);

    let mapaAbierto = false

    function mostrarMapa() {

        const divMapa = document.getElementById(`mapa`)
        divMapa.style.height=`400px`
       
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            const marker = L.marker([lat, long]).addTo(map);

            map.fitBounds([
                [marker.getLatLng().lat, marker.getLatLng().lng]
            ])
        
            map.invalidateSize();
            divMapa.scrollIntoView({ behavior: 'smooth' });

            mapaAbierto = true
    }

    function cerrarMapa(){
        const divMapa = document.getElementById(`mapa`)
        divMapa.style.height=`0px`
        mapaAbierto= false
    }

    let botonUbicacion = document.querySelector(`.btn-ubicacion`)
    botonUbicacion.addEventListener(`click`, function(){
        if(!mapaAbierto){
            mostrarMapa()
        }else{
            cerrarMapa()
        }
    })
}

const enviarReserva = () => {

    let fechaActual = new Date();
    let fechaActualFormateada = fechaActual.toISOString().split('T')[0];

    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();

    let horasFormateadas = horas < 10 ? '0' + horas : horas;
    let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;

    let horaActualFormateada = `${horasFormateadas}:${minutosFormateados}`;


    document.getElementById('inputDia').min = fechaActualFormateada;
    document.getElementById('inputHora').min = horaActualFormateada;


    let dia = document.getElementById(`inputDia`);
    let hora = document.getElementById(`inputHora`);
    let comensales = document.getElementById(`inputComensales`);

    let botonReservar = document.querySelector(`.boton-reservar`)
    botonReservar.addEventListener(`click`, function () {

        let mensaje

        switch (true) {
            case dia.value === '':
            case hora.value === '':
            case comensales.value === '':
                mensaje = `Por favor, complete todos los campos.`;
                break;

            case dia.value === fechaActualFormateada && hora.value < horaActualFormateada:
                mensaje = 'La hora seleccionada ya ha pasado. Por favor, elija una hora futura.';
                break;

            default: mensaje = 'Reserva enviada correctamente.';
            dia.value = ``
            hora.value= ``
            comensales.value = ``
                break;

        }

        if (mensaje.includes('correctamente') || mensaje.includes('pasado')) {
            Swal.fire({
                icon: mensaje.includes('correctamente') ? 'success' : 'warning',
                title: mensaje.includes('correctamente') ? 'Éxito' : 'Advertencia',
                text: mensaje,
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: mensaje,
            });
        }

    })

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
    cargarMapa();
    enviarReserva();
    cambiarColorEnlace();
}


document.addEventListener("DOMContentLoaded", paginaCargada);


