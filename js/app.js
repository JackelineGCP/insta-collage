// los eventPrefault, detendrá el comportamiento por defecto de los eventos

let boxOrigin = document.getElementById('image');
let boxDestin = document.getElementById('content-box');


//Eventos
boxOrigin.addEventListener('dragstart', originStar);
boxDestin.addEventListener('dragenter', function (e) {
    e.preventDefault();
})

boxDestin.addEventListener('dragover', function (e) {
    e.preventDefault();
})

boxDestin.addEventListener('drop', destinFin);
boxOrigin.addEventListener('dragend', finished);
// evento generado al momento de entrar al destino final
boxDestin.addEventListener('dragenter', initGo);

// dispara la accion al salir de la seccion
boxDestin.addEventListener('dragleave', initLeave);



// Funciones globales 
function originStar(e) {
    let newImage = `<img id="foto1" class="foto" draggable="true" src="${boxOrigin.getAttribute('src')}" alt="mascota1">`;
    e.dataTransfer.setData('text', newImage);
}

function destinFin(e) {
    e.preventDefault();
    boxDestin.innerHTML = e.dataTransfer.getData('text');
}

function finished(e) {
    let element = e.target;
    element.style.visibility = 'hidden';

}

function initGo(e) {
    e.preventDefault();
    boxDestin.style.background = 'grey';

}

function initLeave(e) {
    e.preventDefault();
    boxDestin.style.background = 'none';
    
}