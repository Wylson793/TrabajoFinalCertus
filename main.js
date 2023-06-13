/*agregar el escucha de evento a los botones*/
let botones = document.querySelectorAll("article > button");

/*bucle para...*/
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click",agregarCarrito,false);  
}

function agregarCarrito(e){
    /*Consultar el contenido del carrito */
    /*let carrito=document.querySelector("#carrito");*/
    /* si esta la imagen del carrito vacio se elimina*/
    if(document.querySelector("#carritoVacio")){
        document.querySelector("#carritoVacio").remove();
        document.querySelector("#carrito >figcaption").remove();
    }
    /*obtener el elemento padre donde se hizo click */
    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;

    /*sacar informacion */
    let titulo = elementoPadre.querySelector("h3").innerHTML;
    let parrafo = elementoPadre.querySelector("p").innerHTML;
    
    /*Agregar informacion al carrito */
    let nuevoelemento = document.createElement("div");

    nuevoelemento.innerHTML = `<div>
                                <h3>${titulo}</h3>
                                <p>${parrafo}</p>
                                </div>
                                `;
    
    document.querySelector("#carrito").append(nuevoelemento);

    alert("Se agrego correctamente")
}