let currentImageIndex = 0;
const images = document.querySelectorAll(".imagen");
const tiempoRotacion = 5000; // Tiempo en milisegundos (5000ms = 5 segundos)

function ocultarTodasLasImagenes() {
  images.forEach((imagen) => (imagen.style.display = "none"));
}

function mostrarImagen(indice) {
  ocultarTodasLasImagenes();
  currentImageIndex = (indice + images.length) % images.length;
  images[currentImageIndex].style.display = "block";
}

function cambiarImagen(indice) {
  mostrarImagen(currentImageIndex + indice);
}

function rotacionAutomatica() {
  cambiarImagen(1);
  setTimeout(rotacionAutomatica, tiempoRotacion);
}

// Mostrar solo la primera imagen al cargar la página
ocultarTodasLasImagenes();
images[currentImageIndex].style.display = "block";

// Iniciar la rotación automática
rotacionAutomatica();
