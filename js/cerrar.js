// Obtener todos los modales
var modals = document.querySelectorAll(".modal");

// Función para cerrar un modal específico
function closeModal(modal) {
  modal.style.display = "none";
}

// Cerrar el modal al presionar la tecla "Esc"
window.onkeydown = function (event) {
  if (event.key === "Escape") {
    modals.forEach(function (modal) {
      closeModal(modal);
    });
  }
};
