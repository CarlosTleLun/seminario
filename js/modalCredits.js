document.getElementById("credits-link").onclick = function () {
  document.getElementById("credits-modal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("credits-modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("credits-modal")) {
    document.getElementById("credits-modal").style.display = "none";
  }
};
