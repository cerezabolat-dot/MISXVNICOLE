document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. CONFIGURACIÓN DEL CONTADOR (COUNTDOWN)
  // ==========================================
  // Fecha del evento: 27 de Junio de 2026 11:00:00 (según tu itinerario)
const countdownDate = new Date("2026-06-27T11:00:00").getTime();

 const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Elementos del DOM
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Si la fecha ya pasó
    if (distance < 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minutesEl) minutesEl.innerText = "00";
      if (secondsEl) secondsEl.innerText = "00";
      clearInterval(countdownInterval);
      return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formato con cero a la izquierda (ej: 05 en vez de 5)
    if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  };

  // Ejecutar de inmediato y luego cada segundo
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);


  // ==========================================
  // 2. CONTROL DE LA MÚSICA DE FONDO
  // ==========================================
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");

  if (musicBtn && bgMusic) {
    // Ajustamos el volumen un poco más suave por cortesía (0.6 de 1.0)
    bgMusic.volume = 0.6; 

    musicBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play()
          .then(() => {
            musicBtn.innerHTML = "✨ Pausar Música";
            musicBtn.style.background = "linear-gradient(135deg, #ffd978 0%, #f3c46b 100%)";
            musicBtn.style.color = "#0b5963";
          })
          .catch(error => {
            console.log("Error al reproducir audio: ", error);
          });
      } else {
        bgMusic.pause();
        musicBtn.innerHTML = "✨ Dale Play";
        musicBtn.style.background = "linear-gradient(135deg, #ffffff 0%, #e2f7f8 100%)";
        musicBtn.style.color = "#0b5963";
      }
    });
  }

// --- CARRUSEL AUTOMÁTICO HORIZONTAL ---
const track = document.getElementById('track');
const images = track.getElementsByTagName('img');
let index = 0;

function nextSlide() {
    index++;
    
    // Si llega al final de las imágenes, regresa a la primera
    if (index >= images.length) {
        index = 0;
    }
    
    // Mueve la tira de imágenes horizontalmente basado en el índice actual
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia de foto automáticamente cada 3.5 segundos (3500 milisegundos)
setInterval(nextSlide, 3500);
  const carouselImg = document.getElementById("carousel-image");
  let currentIdx = 0;

  if (carouselImg && fotosNicole.length > 1) {
    setInterval(() => {
      // Efecto sutil de parpadeo al cambiar la foto
      carouselImg.style.opacity = 0.3;
      
      setTimeout(() => {
        currentIdx = (currentIdx + 1) % fotosNicole.length;
        carouselImg.src = fotosNicole[currentIdx];
        carouselImg.style.opacity = 1;
      }, 400); // Cambia el origen a mitad de la transición

    }, 4000); // Cambia de foto cada 4 segundos
  }
});
