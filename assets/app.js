const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li a');

const entrarBtn = document.getElementById('entrar-btn');
const videoContainer = document.getElementById('video-container');
const contenidoPrincipal = document.getElementById('contenido-principal');
const videoPrincipal = contenidoPrincipal.querySelector('video'); // Selector del video dentro del contenido principal


const muteIcon = document.getElementById('mute-icon');

// Función para mostrar el contenido principal y ocultar el video
function mostrarContenido() {
    contenidoPrincipal.classList.remove('hidden');
    videoContainer.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
    videoPrincipal.play();
    setTimeout(function() {
        contenidoPrincipal.classList.add('show'); // Agrega la clase 'show' para mostrar el contenido principal con un fade-in
    }, 50); // Agrega un pequeño retraso para asegurar que la transición sea visible
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



// Función para alternar el estado de silencio del video
function toggleMute() {
    if (videoPrincipal.muted) {
        videoPrincipal.muted = false;
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
    } else {
        videoPrincipal.muted = true;
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    }
}

// Agrega un evento clic al ícono de silencio
muteIcon.addEventListener('click', toggleMute);

