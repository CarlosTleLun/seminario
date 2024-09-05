// Selecciona todos los content-card
const contentCards = document.querySelectorAll(".content-card");

// Agrega un evento de clic a cada content-card
contentCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Oculta todos los content-card
    contentCards.forEach((card) => {
      card.style.display = "none";
    });

    // Muestra solo el detalle correspondiente al content-card clicado
    const detailId = card.id + "Details";
    const detailToShow = document.getElementById(detailId);
    if (detailToShow) {
      detailToShow.style.display = "block";
    }
  });
});
