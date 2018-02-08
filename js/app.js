// los eventPrefault, detendrá el comportamiento por defecto de los eventos

// Llamamos al DOM
let images = document.querySelectorAll('#content img');
let boxDestin = document.getElementById('content-box');
let boxOrigin = document.getElementById('content');

// Recoremos las etiquetas img
images.forEach(function(value) {
  value.addEventListener('dragstart', originStar);
});

boxDestin.addEventListener('dragover', function(e) {
  e.preventDefault();
});

boxDestin.addEventListener('drop', destinFin);
boxOrigin.addEventListener('dragend', finished); 
boxDestin.addEventListener('dragenter', initGo); 
boxDestin.addEventListener('dragleave', initLeave);

// Funciones globales 
function originStar(e) {
  let element = e.target;
  e.dataTransfer.setData('text', element.getAttribute('id'));
}

function destinFin(e) {
  e.preventDefault();
  let id = e.dataTransfer.getData('text');
  let src = document.getElementById(id).src;
  // Contenido img en el nuestro contenedor
  boxDestin.innerHTML += `  <img class="one" src="${src}" alt="${src}">`;
}

// Le decimos que hacer al soltar el cursor en el contenedor de origen
function finished(e) {
  let element = e.target;    
  // element.style.visibility = 'hidden';
}
// al solo ingresar al nuevo contenedor, hacemos que cambien de fondo
function initGo(e) {
  e.preventDefault();
  // boxDestin.style.background = '#5B4E77';
  boxDestin.style.border = '1px solid #55D6BE';
}
// al salir del nuevo contenedor, hacemos que el fondo desaparezca
function initLeave(e) {
  e.preventDefault();
  boxDestin.style.background = 'none';
}