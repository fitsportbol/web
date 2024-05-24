const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cagarEventListerners();

function cagarEventListerners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Agregar evento al enlace de contacto
    const contacto = document.getElementById('contacto');
    if (contacto) {
        contacto.addEventListener('click', abrirWhatsApp);
    }
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row= document.createElement('tr');
    row.innerHTML= `
        <td>
           <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
          ${elemento.titulo}
        </td>
        <td>
          ${elemento.precio}
        </td>
        <td>
             <a href="#" class="borrar" data-id= "${elemento.id}">X </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

function abrirWhatsApp(e) {
    e.preventDefault(); // Evita que el enlace se siga normalmente

    // Abre WhatsApp en una ventana emergente con el número especificado
    window.open('https://wa.me/+59173389591', '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=400');
}
