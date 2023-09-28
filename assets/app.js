const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li a');

const entrarBtn = document.getElementById('entrar-btn');
const videoContainer = document.getElementById('video-container');
const contenidoPrincipal = document.getElementById('contenido-principal');
const videoPrincipal = contenidoPrincipal.querySelector('video'); // Selector del video dentro del contenido principal

// Función para mostrar el contenido principal y ocultar el video
function mostrarContenido() {
    contenidoPrincipal.classList.remove('hidden');
    videoContainer.style.display = 'none';
    document.body.classList.remove('overflow-hidden'); // Quitar overflow: hidden del body
    videoPrincipal.play(); // Iniciar el video
}

entrarBtn.addEventListener('click', mostrarContenido);

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
});
