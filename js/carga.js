document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    // Cuando el contenido está al 50% (es decir, DOM cargado pero no los recursos externos)
    console.log("Cargando al 50%");
    document.querySelector(".loader-wrapper").style.display = "none"; // Oculta la animación de carga
  }

  if (document.readyState === "complete") {
    // Cuando la página esté completamente cargada
    console.log("Carga completa");
    document.querySelector(".loader-wrapper").style.display = "none"; // Oculta la animación si no lo has hecho antes
  }
};
