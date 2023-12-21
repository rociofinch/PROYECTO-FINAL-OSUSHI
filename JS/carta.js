const agregarCarrito = () => {


    const btnYakitori1 = document.querySelector(`.btn-yakitori-1`);
    const btnYakitori11 = document.querySelector(`.btn-yakitori-11`);
    const btnYakitori12 = document.querySelector(`.btn-yakitori-12`);

    const btnSushi2 = document.querySelector(`.btn-sushi-2`);
    const btnSushi21 = document.querySelector(`.btn-sushi-21`);
    const btnSushi22 = document.querySelector(`.btn-sushi-22`);

    const btnMaki3 = document.querySelector(`.btn-maki-3`);
    const btnMaki31 = document.querySelector(`.btn-maki-31`);
    const btnMaki32 = document.querySelector(`.btn-maki-32`);

    const btnUramaki4 = document.querySelector(`.btn-uramaki-4`);
    const btnUramaki41 = document.querySelector(`.btn-uramaki-41`);
    const btnUramaki42 = document.querySelector(`.btn-uramaki-42`);

    const btnNigiri5 = document.querySelector(`.btn-nigiri-5`);
    const btnNigiri51 = document.querySelector(`.btn-nigiri-51`);
    const btnNigiri52 = document.querySelector(`.btn-nigiri-52`);

    const btnGyozas6 = document.querySelector(`.btn-gyozas-6`);
    const btnGyozas61 = document.querySelector(`.btn-gyozas-61`);
    const btnGyozas62 = document.querySelector(`.btn-gyozas-62`);

    const btnNoodles7 = document.querySelector(`.btn-noodles-7`);
    const btnNoodles71 = document.querySelector(`.btn-noodles-71`);
    const btnNoodles72 = document.querySelector(`.btn-noodles-72`);

    const btnArroz8 = document.querySelector(`.btn-arroz-8`);
    const btnArroz81 = document.querySelector(`.btn-arroz-81`);
    const btnArroz82 = document.querySelector(`.btn-arroz-82`);

    const btnMochi9 = document.querySelector(`.btn-mochi-9`);
    const btnMochi91 = document.querySelector(`.btn-mochi-91`);
    const btnMochi92 = document.querySelector(`.btn-mochi-92`);


    const carrito = document.querySelector(`.carrito`);
    let contadorPorBoton = []

    function agregarProducto(productoBoton, productoNombre, precio, contadorId) {

        contadorPorBoton[contadorId] = 1

        function subirContador() {
            contadorPorBoton[contadorId]++;
            parrafoContador.innerHTML = contadorPorBoton[contadorId];
            parrafoPrecio.innerHTML = contadorPorBoton[contadorId] * precio + `€`
            contadorCard.innerHTML = contadorPorBoton[contadorId];
            actualizarTotal()
        }

        function bajarContador() {
            if (contadorPorBoton[contadorId] > 1) {
                contadorPorBoton[contadorId]--;
                parrafoContador.innerHTML = contadorPorBoton[contadorId];
                parrafoPrecio.innerHTML = contadorPorBoton[contadorId] * precio + `€`
                contadorCard.innerHTML = contadorPorBoton[contadorId];
                actualizarTotal()
            } else {
                contadorPorBoton[contadorId] = 0
                parrafoContador.innerHTML = contadorPorBoton[contadorId];
                parrafoPrecio.innerHTML = contadorPorBoton[contadorId] * precio + `€`
                contadorCard.innerHTML = contadorPorBoton[contadorId];
                actualizarTotal()
                carrito.removeChild(divItem);
                const divContadorCard = document.getElementById(`contador${contadorId}`)
                divContadorCard.removeChild(contadorCard)
                divContadorCard.removeChild(btnContadorMinusCard)
                productoBoton.classList.remove(`pulsado`)
            }
        }


        const divContadorCard = document.getElementById(`contador${contadorId}`)
        const btnContadorPlusCard = document.querySelector(`.boton-agregar${contadorId}`)
        btnContadorPlusCard.classList.remove(`btn-agregar`)
        btnContadorPlusCard.classList.add(`btn-card`)
        btnContadorPlusCard.innerHTML = `+`

        let btnContadorMinusCard = document.createElement(`button`)
        btnContadorMinusCard.setAttribute(`type`, `button`);
        btnContadorMinusCard.classList.add(`minus-card${contadorId}`)
        btnContadorMinusCard.classList.add(`btn-card`)
        btnContadorMinusCard.innerHTML = `-`
        btnContadorMinusCard.addEventListener(`click`, bajarContador)

        let contadorCard = document.createElement(`p`)
        contadorCard.classList.add(`contador-card-${contadorId}`)
        contadorCard.classList.add(`contador-card`)
        contadorCard.classList.add(`parrafo`)
        contadorCard.innerHTML = contadorPorBoton[contadorId];

        divContadorCard.insertBefore(contadorCard, btnContadorPlusCard)
        divContadorCard.insertBefore(btnContadorMinusCard, contadorCard)


        let divItem = document.createElement(`div`)
        divItem.classList.add(`flex`)
        let parrafoItem = document.createElement(`p`)
        parrafoItem.classList.add(`nombre-producto-carrito`)
        parrafoItem.classList.add(`parrafo`)
        carrito.appendChild(divItem)
        carrito.classList.add(`bloque`)
        parrafoItem.innerHTML = productoNombre

        let divContador = document.createElement(`div`)
        divContador.classList.add(`flex`)
        divContador.classList.add(`div-contador`)

        let btnContadorPlus = document.createElement(`button`)
        btnContadorPlus.setAttribute(`type`, `button`);
        btnContadorPlus.classList.add(`btn-cantidad-carrito`)
        btnContadorPlus.innerHTML = `+`
        btnContadorPlus.addEventListener("click", subirContador)

        let btnContadorMinus = document.createElement(`button`)
        btnContadorMinus.setAttribute(`type`, `button`);
        btnContadorMinus.classList.add(`btn-cantidad-carrito`)
        btnContadorMinus.innerHTML = `-`
        btnContadorMinus.addEventListener(`click`, bajarContador)

        let parrafoContador = document.createElement(`p`)
        parrafoContador.classList.add(`contador-carrito`)
        parrafoContador.classList.add(`contador${contadorId}`)
        parrafoContador.innerHTML = contadorPorBoton[contadorId];
        let parrafoPrecio = document.createElement(`p`)
        parrafoPrecio.classList.add(`precio${contadorId}`)
        parrafoPrecio.classList.add(`precio-total-producto`)
        parrafoPrecio.innerHTML = contadorPorBoton[contadorId] * precio + `€`

        let divParrafoPrecio = document.createElement(`div`)
        divParrafoPrecio.classList.add(`div-parrafo-precio`)

        divContador.appendChild(btnContadorMinus)
        divContador.appendChild(parrafoContador)
        divContador.appendChild(btnContadorPlus)
        divContador.appendChild(parrafoItem)
        divItem.appendChild(divContador)
        divParrafoPrecio.appendChild(parrafoPrecio)
        divItem.appendChild(divContador)
        divItem.appendChild(divParrafoPrecio)
        carrito.appendChild(divItem)

        productoBoton.classList.add(`pulsado`)
        actualizarTotal()
        carrito.scrollTop = carrito.scrollHeight;
    }

    function actualizarTotal() {
        const parrafosTotal = document.querySelectorAll(`.precio-total-producto`)
        const sumaTotal = Array.from(parrafosTotal).reduce((acumulador, parrafoTotal) => {
            const numero = parseInt(parrafoTotal.innerText);
            if (!isNaN(numero)) {
                return acumulador + numero
            }
            return acumulador
        }, 0);
        const totales = document.querySelector(`.parrafo-total`)
        totales.innerHTML = sumaTotal + ` €`
        const parrafoTotal = document.querySelector(`.parrafo-total`)
        if (sumaTotal === 0) {
            parrafoTotal.textContent = ``
        }
    }

   
    function subirContadorMedianteAñadir(precio, contadorId) {
        contadorPorBoton[contadorId]++
        const contadorProducto = document.querySelector(`.contador${contadorId}`);
        const contadorProductoCard = document.querySelector(`.contador-card-${contadorId}`);
        const precioProducto = document.querySelector(`.precio${contadorId}`);
        contadorProducto.innerHTML = contadorPorBoton[contadorId]
        contadorProductoCard.innerHTML = contadorPorBoton[contadorId]
        precioProducto.innerHTML = contadorPorBoton[contadorId] * precio + `€`
        actualizarTotal()

    }

function enviarPedido(){

    let datosPedido = document.getElementById('carrito');
    let elementosCantidadPedido= datosPedido.querySelectorAll(`.contador-carrito`)
    let elementosProductoPedido= datosPedido.querySelectorAll(`.nombre-producto-carrito`)
    let precioPedido = document.querySelector(`.parrafo-total`)
    let precioTotalPedido = precioPedido.textContent

    let emailBody = ``

    elementosCantidadPedido.forEach(function(cantidad, index) {
        let datoCantidad = cantidad.textContent;

        let producto = elementosProductoPedido[index];
        let datoProducto = producto.textContent;

        let parrafo = `${datoCantidad} ${datoProducto}` + "\n\n"

        emailBody += parrafo
    
    });

    const tablonMensaje = document.querySelector(`.carrito`)
    const mensajePedidoRealizado = document.querySelector(`.alert-success`)
    const mensajeDatosPedido = document.querySelector(`.datos-pedido`)
    const mensajePrecio = document.querySelector(`.precio-pedido`)
    mensajeDatosPedido.innerText = emailBody
    mensajePrecio.innerText = precioTotalPedido
    tablonMensaje.innerText = ``
    tablonMensaje.appendChild(mensajePedidoRealizado)
    mensajePedidoRealizado.classList.remove(`oculto`)

    precioPedido.textContent = ``
    const botonPedido = document.querySelector(`.boton-pedido`)
    botonPedido.innerText = `NUEVO PEDIDO`

    Swal.fire({
        icon: 'success',
        title: 'Su pedido ha sido realizado con éxito',
        text: `Los datos de su pedido se muestran en el carrito.`,
        showConfirmButton: true
    });
}

function comprobarPedidoMinimo(){
    const precioTotalPedido = document.querySelector(`.parrafo-total`)
    const numeroPrecioTotal = parseInt(precioTotalPedido.innerText);
    if(numeroPrecioTotal<20){
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'El pedido debe ser de más de 20€ para confirmar.',
            showConfirmButton: true
        });
    }else{
        enviarPedido()
    }
}

const alerta = document.querySelector(`.alert-success`)
const btnPedido = document.querySelector(`.boton-pedido`)
btnPedido.addEventListener(`click`, function(){
    if(!alerta.classList.contains(`oculto`)){
        location.reload();
    }else{
        comprobarPedidoMinimo(); 
    }
    
})
    

    //Eventos botones YAKITORI
    btnYakitori1.addEventListener(`click`, function () {
        if (!btnYakitori1.classList.contains(`pulsado`)) {
            agregarProducto(btnYakitori1, `Yakitori de pollo`, 8, 1)
        } else {
            subirContadorMedianteAñadir(8, 1)
        }
    });

    btnYakitori11.addEventListener(`click`, function () {
        if (!btnYakitori11.classList.contains(`pulsado`)) {
            agregarProducto(btnYakitori11, `Yakitori de cerdo`, 8, 11)
        } else {
            subirContadorMedianteAñadir(8, 11)
        }
    });

    btnYakitori12.addEventListener(`click`, function () {
        if (!btnYakitori12.classList.contains(`pulsado`)) {
            agregarProducto(btnYakitori12, `Yakitori de ternera`, 8, 12)
        } else {
            subirContadorMedianteAñadir(8, 12)
        }
    });

    //Eventos botones SUSHI
    btnSushi2.addEventListener(`click`, function () {
        if (!btnSushi2.classList.contains(`pulsado`)) {
            agregarProducto(btnSushi2, `Sushi de salmón y queso`, 10, 2)
        } else {
            subirContadorMedianteAñadir(10, 2)
        }
    });

    btnSushi21.addEventListener(`click`, function () {
        if (!btnSushi21.classList.contains("pulsado")) {
            agregarProducto(btnSushi21, `Sushi de atún y aguacate`, 10, 21)
        } else {
            subirContadorMedianteAñadir(10, 21)
        }
    });

    btnSushi22.addEventListener(`click`, function () {
        if (!btnSushi22.classList.contains("pulsado")) {
            agregarProducto(btnSushi22, `Sushi de queso y pepino`, 10, 22)
        } else {
            subirContadorMedianteAñadir(10, 22)
        }
    });

    //Eventos botones MAKI
    btnMaki3.addEventListener(`click`, function () {
        if (!btnMaki3.classList.contains(`pulsado`)) {
            agregarProducto(btnMaki3, `Maki de pez mantequilla`, 10, 3)
        } else {
            subirContadorMedianteAñadir(10, 3)
        }
    });

    btnMaki31.addEventListener(`click`, function () {
        if (!btnMaki31.classList.contains("pulsado")) {
            agregarProducto(btnMaki31, `Maki de queso y mango`, 10, 31)
        } else {
            subirContadorMedianteAñadir(10, 31)
        }
    });

    btnMaki32.addEventListener(`click`, function () {
        if (!btnMaki32.classList.contains("pulsado")) {
            agregarProducto(btnMaki32, `Maki de salmón y pepino`, 10, 32)
        } else {
            subirContadorMedianteAñadir(10, 32)
        }
    });

    //Eventos botones URAMAKI
    btnUramaki4.addEventListener(`click`, function () {
        if (!btnUramaki4.classList.contains(`pulsado`)) {
            agregarProducto(btnUramaki4, `Uramaki de queso de cabra`, 10, 4)
        } else {
            subirContadorMedianteAñadir(10, 4)
        }
    });

    btnUramaki41.addEventListener(`click`, function () {
        if (!btnUramaki41.classList.contains("pulsado")) {
            agregarProducto(btnUramaki41, `Uramaki de mango y pollo`, 10, 41)
        } else {
            subirContadorMedianteAñadir(10, 41)
        }
    });

    btnUramaki42.addEventListener(`click`, function () {
        if (!btnUramaki42.classList.contains("pulsado")) {
            agregarProducto(btnUramaki42, `Uramaki de aguacate y vieira`, 10, 42)
        } else {
            subirContadorMedianteAñadir(10, 42)
        }
    });

    //Eventos botones NIGIRI
    btnNigiri5.addEventListener(`click`, function () {
        if (!btnNigiri5.classList.contains(`pulsado`)) {
            agregarProducto(btnNigiri5, `Nigiri de salmón y aguacate`, 10, 5)
        } else {
            subirContadorMedianteAñadir(10, 5)
        }
    });

    btnNigiri51.addEventListener(`click`, function () {
        if (!btnNigiri51.classList.contains("pulsado")) {
            agregarProducto(btnNigiri51, `Nigiri de pez mantequilla`, 10, 51)
        } else {
            subirContadorMedianteAñadir(10, 51)
        }
    });

    btnNigiri52.addEventListener(`click`, function () {
        if (!btnNigiri52.classList.contains("pulsado")) {
            agregarProducto(btnNigiri52, `Nigiri de atún rojo`, 10, 52)
        } else {
            subirContadorMedianteAñadir(10, 52)
        }
    });

    //Eventos botones GYOZAS
    btnGyozas6.addEventListener(`click`, function () {
        if (!btnGyozas6.classList.contains(`pulsado`)) {
            agregarProducto(btnGyozas6, `Gyozas de pollo`, 6, 6)
        } else {
            subirContadorMedianteAñadir(6, 6)
        }
    });

    btnGyozas61.addEventListener(`click`, function () {
        if (!btnGyozas61.classList.contains("pulsado")) {
            agregarProducto(btnGyozas61, `Gyozas de ternera`, 6, 61)
        } else {
            subirContadorMedianteAñadir(6, 61)
        }
    });

    btnGyozas62.addEventListener(`click`, function () {
        if (!btnGyozas62.classList.contains("pulsado")) {
            agregarProducto(btnGyozas62, `Gyozas de verduras`, 6, 62)
        } else {
            subirContadorMedianteAñadir(6, 62)
        }
    });

    //Eventos botones NOODLES
    btnNoodles7.addEventListener(`click`, function () {
        if (!btnNoodles7.classList.contains(`pulsado`)) {
            agregarProducto(btnNoodles7, `Yakisoba vegetal`, 10, 7)
        } else {
            subirContadorMedianteAñadir(10, 7)
        }
    });

    btnNoodles71.addEventListener(`click`, function () {
        if (!btnNoodles71.classList.contains("pulsado")) {
            agregarProducto(btnNoodles71, `Udón de pollo teriyaki`, 10, 71)
        } else {
            subirContadorMedianteAñadir(10, 71)
        }
    });

    btnNoodles72.addEventListener(`click`, function () {
        if (!btnNoodles72.classList.contains("pulsado")) {
            agregarProducto(btnNoodles72, `Udón de ternera`, 10, 72)
        } else {
            subirContadorMedianteAñadir(10, 72)
        }
    });

    //Eventos botones ARROZ
    btnArroz8.addEventListener(`click`, function () {
        if (!btnArroz8.classList.contains(`pulsado`)) {
            agregarProducto(btnArroz8, `Arroz natural cocido`, 5, 8)
        } else {
            subirContadorMedianteAñadir(5, 8)
        }
    });

    btnArroz81.addEventListener(`click`, function () {
        if (!btnArroz81.classList.contains("pulsado")) {
            agregarProducto(btnArroz81, `Katsudon de cerdo`, 8, 81)
        } else {
            subirContadorMedianteAñadir(8, 81)
        }
    });

    btnArroz82.addEventListener(`click`, function () {
        if (!btnArroz82.classList.contains("pulsado")) {
            agregarProducto(btnArroz82, `Katsudon de pollo`, 8, 82)
        } else {
            subirContadorMedianteAñadir(8, 82)
        }
    });

    //Eventos botones MOCHIS
    btnMochi9.addEventListener(`click`, function () {
        if (!btnMochi9.classList.contains(`pulsado`)) {
            agregarProducto(btnMochi9, `Mochi de mango`, 6, 9)
        } else {
            subirContadorMedianteAñadir(6, 9)
        }
    });

    btnMochi91.addEventListener(`click`, function () {
        if (!btnMochi91.classList.contains("pulsado")) {
            agregarProducto(btnMochi91, `Mochi de chocolate`, 6, 91)
        } else {
            subirContadorMedianteAñadir(6, 91)
        }
    });

    btnMochi92.addEventListener(`click`, function () {
        if (!btnMochi92.classList.contains("pulsado")) {
            agregarProducto(btnMochi92, `Mochi de fresa`, 6, 92)
        } else {
            subirContadorMedianteAñadir(6, 92)
        }
    });
        
}


const botonFlotanteResponsive = () => {

    const seccionOculta = document.getElementById(`contenedor-scroll`);

    let modalAbierto = false

    function abrirModal() {
        console.log(`apertura de modal`)
    
        let btnCerrarModal = document.createElement(`button`)
        btnCerrarModal.setAttribute(`type`, `button`);
        btnCerrarModal.classList.add(`cerrar-modal`)
        btnCerrarModal.classList.add(`btn-card`)
        btnCerrarModal.innerHTML = 'X';
        btnCerrarModal.addEventListener(`click`, function () {
            cerrarModal()
        })
        let btnFlotante = document.querySelector(`.btn-flotante`)
        btnFlotante.classList.add(`oculto`)
        seccionOculta.style.display = `flex`
        seccionOculta.appendChild(btnCerrarModal)
        seccionOculta.classList.add(`modal`)
        modalAbierto = true
    }

    function quitarOcultoBotonFlotante(){
        btnFlotante = document.querySelector(`.btn-flotante`)
        btnFlotante.classList.remove(`oculto`)      
    }
    

    function cerrarModal() {
        console.log(`cierre de modal`)

        seccionOculta.classList.remove(`modal`)
        const botonCierraModal = document.querySelector('.cerrar-modal');
        botonCierraModal.remove()
        if (window.innerWidth < 1200) {
            seccionOculta.style.display = `none`
            quitarOcultoBotonFlotante() 
        }    
        modalAbierto = false
    }

    let botonFlotando = false

    function flotarBoton() {
        if (!botonFlotando & !modalAbierto) {
            const divBotonFlotante = document.querySelector(`.div-btn-flotante`);
            let btnFlotante = document.createElement(`button`);
            btnFlotante.setAttribute(`type`, `button`);
            btnFlotante.classList.add(`btn-flotante`);
            btnFlotante.classList.add(`boton-pedido`);
            btnFlotante.addEventListener('click', abrirModal);
            btnFlotante.innerHTML = `VER CARRITO`
            divBotonFlotante.appendChild(btnFlotante);
            seccionOculta.style.display = `none`

            botonFlotando = true
        }
    }


    function reajustarPantalla() {
        let enPantallaCompleta = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (window.innerWidth < 1200 || enPantallaCompleta) {
            flotarBoton()
        } else {
            const divBotonFlotante = document.querySelector(`.div-btn-flotante`);
            divBotonFlotante.innerHTML = ``
            if (botonFlotando) {
                botonFlotando = false
                console.log(`ya no hay boton flotante`)
            }            
            if(!modalAbierto){
                seccionOculta.style.display = `flex`
            }
        }
    }

    window.addEventListener('resize', function () {
        reajustarPantalla()
        if(window.innerWidth > 1200 & modalAbierto){
            cerrarModal()
        }
    });

    window.addEventListener('load', reajustarPantalla);
    document.addEventListener('fullscreenchange', reajustarPantalla);
    document.addEventListener('mozfullscreenchange', reajustarPantalla);
    document.addEventListener('webkitfullscreenchange', reajustarPantalla);
}

const cambiarColorEnlace = () =>{
 

    let urlActual = window.location.href;
    let enlacesNavegacion = document.querySelectorAll('.enlace-offcanvas');

    enlacesNavegacion.forEach(function(enlace) {
        let urlEnlace = enlace.href;
        
        if (urlActual === urlEnlace) {
            enlace.classList.add('activo');
        }
  
});

}

const paginaCargada = () => {
    agregarCarrito();
    botonFlotanteResponsive()
    cambiarColorEnlace();
}

document.addEventListener("DOMContentLoaded", paginaCargada);




