document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var cards = document.querySelectorAll(".content-card");

    cards.forEach(function (card) {
      if (isElementInViewport(card)) {
        card.style.opacity = "1"; // Si el contenido está visible, lo hacemos visible
      } else {
        card.style.opacity = "0"; // Si el contenido no está visible, lo hacemos invisible
      }
    });
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
