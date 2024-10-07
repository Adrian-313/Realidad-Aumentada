const button = document.getElementById('interactive-button');
const message = document.getElementById('motivational-message');
let audio = null;

// Mensajes motivadores cortos
const motivationalMessages = [
    "Haz que cada día cuente.",
    "Si puedes soñarlo, puedes hacerlo.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Haz que suceda.",
    "Cree en ti mismo.",
    "La actitud lo es todo.",
    "Persigue tus sueños.",
    "Nunca te rindas.",
    "Sé la razón por la que alguien sonríe hoy.",
    "Sé la mejor versión de ti mismo."
];

// Función para cambiar la frase motivacional cada 20 segundos
let index = 0;
function changeMotivationalMessage() {
    message.textContent = motivationalMessages[index];
    index = (index + 1) % motivationalMessages.length;
}

// Cambiar la frase inicial
changeMotivationalMessage();

// Intervalo para cambiar la frase cada 20 segundos
const messageInterval = setInterval(changeMotivationalMessage, 20000);

button.addEventListener('click', () => {
    if (audio && !audio.paused) {
        audio.pause();
    } else {
        // Reproducir un sonido (aquí puedes agregar tu propio sonido)
        audio = new Audio('/Audio.mp3');
        audio.play();
    }
});

