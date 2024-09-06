document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    // Ocultar la animación de carga cuando la página esté completamente cargada
    document.querySelector(".loader-wrapper").style.display = "none";
  }
};
