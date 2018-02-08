// los eventPrefault, detendrá el comportamiento por defecto de los eventos

let images = document.querySelectorAll('#content img');
let boxDestin = document.getElementById('content-box');
let boxOrigin = document.getElementById('content');

images.forEach(function (value) {
    value.addEventListener('dragstart', originStar);

})


//Eventos

boxDestin.addEventListener('dragover', function (e) {
    e.preventDefault();
})

boxDestin.addEventListener('drop', destinFin);
boxOrigin.addEventListener('dragend', finished);
// evento generado al momento de entrar al destino final
boxDestin.addEventListener('dragenter', initGo);

// dispara la accion al salir de la seccion
// boxDestin.addEventListener('dragleave', initLeave);

// Funciones globales 
function originStar(e) {
    let element = e.target; 
    e.dataTransfer.setData('text', element.getAttribute('id'));
}

function destinFin(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData('text');
    let src = document.getElementById(id).src;
     
    boxDestin.innerHTML +=  `<img class="foto" src="${src}" alt="${src}">`;
}

function finished(e) {
    let element = e.target;
    // element.style.visibility = 'hidden';

}

function initGo(e) {
    e.preventDefault();
    boxDestin.style.background = 'grey';

}

function initLeave(e) {
    e.preventDefault();
    boxDestin.style.background = 'none';

}