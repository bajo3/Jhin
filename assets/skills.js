// Array de URLs de videos de YouTube para cada habilidad
const videoUrls = [
    "/assets/img/skills/1.webm",
    "/assets/img/skills/2.webm",
    "/assets/img/skills/3.webm",
    "/assets/img/skills/4.webm",
    "/assets/img/skills/5.webm"    
];

// Array de textos para cada habilidad
const textosHabilidades = [
    "Susurro, el cañón de mano de Jhin, es un instrumento preciso diseñado para infligir un gran daño. Dispara con una cadencia fija y solo puede portar cuatro balas. Jhin baña la última bala con magia oscura para asestar impactos críticos e infligir daño de ejecución adicional. Siempre que Susurro asesta un impacto crítico, Jhin obtiene un aumento de velocidad de movimiento.",
    "Jhin lanza un cartucho mágico a un enemigo. Podrá impactar a un máximo de cuatro objetivos y cada vez que mata suma daño.",
    "Jhin blande su bastón y dispara un proyectil con un alcance increíble. Atraviesa a los súbditos y los monstruos, pero se detiene en el primer campeón impactado. El objetivo queda inmovilizado si ha sido víctima de los ataques de los aliados de Jhin, de las trampas de loto o del daño de Jhin.",
    "Jhin coloca una trampa de loto invisible que florece al pasar sobre ella. Ralentiza a los enemigos cercanos antes de infligir daño con una explosión de pétalos serrados. Belleza en la muerte: Cuando Jhin mate a un campeón enemigo, florecerá una trampa de loto junto a su cadáver.",
    "Jhin concentra su energía y transforma Susurro en un megacañón de hombro capaz de realizar 4 superdisparos de gran alcance, que atraviesan a los súbditos y a los monstruos pero se detienen en el primer campeón impactado. Susurro incapacita a los enemigos impactados, los ralentiza e inflige daño de ejecución. El cuarto disparo se prepara con sumo cuidado, tiene una potencia épica y garantiza un impacto crítico."
];

const iconos = document.querySelectorAll('.icono');
const videoFrame = document.getElementById('video-frame');
const textoHabilidad = document.getElementById('texto-habilidad');

function mostrarHabilidadPredefinida() {
    const index = 0 ; // Índice de la habilidad predefinida (en este caso, 0)
    videoFrame.src = videoUrls[index];
    textoHabilidad.textContent = textosHabilidades[index];
}

// Función para cambiar el video y el texto cuando se hace clic en un icono
function cambiarContenido(event) {
    const index = event.currentTarget.getAttribute('data-index');
    videoFrame.querySelector('source').src = videoUrls[index];
    videoFrame.load(); // Recargar el video
    textoHabilidad.textContent = textosHabilidades[index];
}

// Agregar un evento clic a cada icono
iconos.forEach(icono => {
    icono.addEventListener('click', cambiarContenido);
});

mostrarHabilidadPredefinida();
