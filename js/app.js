

let boxOrigin = document.getElementById('image');
boxOrigin.addEventListener('dragstart', originStar);


let boxDestin = document.getElementById('content-box');
boxDestin.addEventListener('dragenter', function (e) {
    e.preventDefault();
})

boxDestin.addEventListener('dragover', function (e) {
    e.preventDefault();
})

boxDestin.addEventListener('drop', destinFin);



function originStar(e) {
    let newImage =  `<img id="foto1" class="foto" draggable="true" src="${boxOrigin.getAttribute('src')}" alt="mascota1">`;
    e.dataTransfer.setData('text', newImage);

}

function destinFin(e) {
    e.preventDefault();
    boxDestin.innerHTML = e.dataTransfer.getData('text');

}