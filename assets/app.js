const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li a');

const entrarBtn = document.getElementById('entrar-btn');
const videoContainer = document.getElementById('video-container');
const contenidoPrincipal = document.getElementById('contenido-principal');
const videoPrincipal = contenidoPrincipal.querySelector('video'); // Selector del video dentro del contenido principal

// Función para ocultar el video y el botón y luego iniciar el video después de 3 segundos
function mostrarContenidoConRetraso() {
    videoContainer.style.display = 'none';
    setTimeout(function () {
        contenidoPrincipal.classList.remove('hidden');
        videoPrincipal.play(); // Iniciar el video
    }, 3000); // 3000 milisegundos (3 segundos)
}

entrarBtn.addEventListener('click', mostrarContenidoConRetraso);

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
});
