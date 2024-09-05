window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header");
  if (window.scrollY > 0) {
    header.classList.add("header-transparente");
  } else {
    header.classList.remove("header-transparente");
  }
});
