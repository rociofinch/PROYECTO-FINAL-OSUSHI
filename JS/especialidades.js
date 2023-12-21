const alimentos = [
    `../media/img/especialidades/Especialidades-01.png`,
    `../media/img/especialidades/Especialidades-02.png`,
    `../media/img/especialidades/Especialidades-03.png`,
    `../media/img/especialidades/Especialidades-04.png`,
    `../media/img/especialidades/Especialidades-05.png`,
    `../media/img/especialidades/Especialidades-06.png`,
    `../media/img/especialidades/Especialidades-07.png`,
    `../media/img/especialidades/Especialidades-08.png`,
    `../media/img/especialidades/Especialidades-09.png`
]

const mostrarAlimentos = () => {
    let contenidoSlider = document.querySelector(".slide-track");

    alimentos.forEach((alimento, id) => {
        let slideDiv = document.createElement(`div`);
        slideDiv.classList.add(`slide`)

        let elementoBoton = document.createElement(`button`);
        elementoBoton.type = "button";
        elementoBoton.classList.add(`boton-invisible`)
        elementoBoton.classList.add(`btn${id + 1}`)


        let elementoAlimento = document.createElement(`img`);
        elementoAlimento.classList.add(`alimento`)
        elementoAlimento.src = alimento;

        contenidoSlider.appendChild(slideDiv)
        slideDiv.appendChild(elementoBoton)
        elementoBoton.appendChild(elementoAlimento)
    });

}


const slider = () => {

    const content = document.querySelector(`.slide-track`);
    const flechaIzq = document.querySelector(`#flecha-izq`);
    const flechaDerecha = document.querySelector(`#flecha-derecha`);

    function moverDerecha() {
        content.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    }

    function moverIzquierda() {
        content.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    }

    flechaIzq.addEventListener("click", moverDerecha);
    flechaDerecha.addEventListener("click", moverIzquierda);

}

const cambiarPrincipal = () => {

    const boton1 = document.querySelector(`.btn1`);
    const boton2 = document.querySelector(`.btn2`);
    const boton3 = document.querySelector(`.btn3`);
    const boton4 = document.querySelector(`.btn4`);
    const boton5 = document.querySelector(`.btn5`);
    const boton6 = document.querySelector(`.btn6`);
    const boton7 = document.querySelector(`.btn7`);
    const boton8 = document.querySelector(`.btn8`);
    const boton9 = document.querySelector(`.btn9`);

    function especialidad(src, titulo, parrafo) {

        const divFila = document.querySelector(`#fila`)
        divFila.classList.add(`fila-elementos`)
        divFila.innerHTML = ``;

        let div1 = document.createElement(`div`)
        div1.classList.add(`col-md-6`)
        div1.classList.add(`div-imagen`)

        let div2 = document.createElement(`div`)
        div2.classList.add(`div-texto`)
        div2.classList.add(`col-md-6`)

        let div3 = document.createElement(`div`)
        div3.classList.add(`div-texto-abajo`)

        let imagenPlato = document.createElement(`img`)
        imagenPlato.classList.add(`imagen-especialidad`)
        imagenPlato.src = src;

        let tituloPlato = document.createElement(`h3`)
        tituloPlato.classList.add(`nombre-plato`)
        tituloPlato.innerText = titulo;

        let parrafoPlato = document.createElement(`p`)
        parrafoPlato.classList.add(`descripcion-plato`)
        parrafoPlato.innerText = parrafo;

        divFila.appendChild(div1)
        div1.appendChild(imagenPlato)

        divFila.appendChild(div2)
        div3.appendChild(tituloPlato)
        div3.appendChild(parrafoPlato)
        div2.appendChild(div3)
    }

    boton1.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/yakitori.jpg', 'Yakitori de pollo', 'Estas sabrosas brochetas se preparan cuidadosamente con trozos de pollo jugoso y tierno, ensartados en palillos de bambú y cocinados a la parrilla hasta obtener un irresistible equilibrio entre sabores ahumados y dulces.')
    });
    boton2.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/sushi.jpg', 'Sushi de salmón y queso', 'Nuestro sushi de salmón presenta una base de arroz de sushi con salmón, queso crema y verduras en su interior, coronado con láminas de aguacate cremoso y acompañados de nuestra salsa especial de soja.')
    });

    boton3.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/maki.jpg', 'Maki de pez mantequilla', 'Nuestro Maki de pez mantequilla es una delicia gastronómica que combina arroz de sushi, pescado fresco, aguacate y otros ingredientes en un rollo perfectamente envuelto con alga nori.')
    });

    boton4.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/uramaki.jpg', 'Uramaki de aguacate y atún', 'Delicados rollos de atún fresco acompañado de verduras, envueltos en alga nori y coronados con una capa de arroz de sushi y semillas de sésamo tostado para añadir textura y sabor.')
    });

    boton5.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/nigiri.jpg', 'Nigiri de salmón y aguacate', 'El salmón fresco y suculento se coloca sobre una cama de arroz de sushi, unidos por una pequeña banda de alga nori. El resultado es una combinación perfecta de textura cremosa y un sabor suavemente dulce que se deshace en tu paladar.')
    });

    boton6.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/gyoza.jpg', 'Gyozas de pollo', 'Rellenas de pollo sazonado y verduras frescas, estas delicias se cocinan al vapor y luego se doran ligeramente para crear una capa crujiente y sabrosa. Se sirven con una salsa de inmersión casera que realza aún más su sabor.')
    });

    boton7.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/noodles.jpg', 'Yakisoba', 'Fideos soba salteados en un wok caliente con verduras frescas y una salsa yakisoba única creando una deliciosa mezcla de texturas crujientes y suaves.')
    });

    boton8.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/arroz.jpg', 'Katsudon de cerdo', 'Nuestro Katsudon presenta un tierno filete de cerdo, previamente empanado y dorado a la perfección, que descansa sobre una cama de arroz blanco recién cocido, acompañado de huevo cremoso y una sabrosa salsa agridulce.')
    });

    boton9.addEventListener("click", function () {
        especialidad('../media/img/especialidades/comida/mochi.jpg', 'Mochi de mango', 'Estos pequeños tesoros comestibles están hechos de arroz glutinoso, creando un exterior elástico y relleno de mango en almíbar realizado de manera tradicional.')
    });

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
    mostrarAlimentos();
    slider();
    cambiarPrincipal();
    cambiarColorEnlace();
}


document.addEventListener("DOMContentLoaded", paginaCargada);


