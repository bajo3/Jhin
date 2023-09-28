const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li a');

const entrarBtn = document.getElementById('entrar-btn');
    const videoContainer = document.getElementById('video-container');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    entrarBtn.addEventListener('click', function () {
        // Oculta el video y el botón
        videoContainer.style.display = 'none';

        // Muestra el contenido principal
        contenidoPrincipal.classList.remove('hidden');
    });

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('active');
    });

    
});
