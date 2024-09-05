document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  var modalTriggers = document.querySelectorAll(".modal-trigger");
  var modalCloses = document.querySelectorAll(".modal-close");

  modalTriggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      modals[index].style.display = "block";
    });
  });

  modalCloses.forEach(function (close) {
    close.addEventListener("click", function () {
      close.closest(".modal").style.display = "none";
    });
  });
});
