function modal() {
  const modal = document.querySelector(".modal");
  const lookBtn = document.querySelectorAll(".lookBtn");
  const modalClose = document.querySelector(".modal__close");

  lookBtn.forEach(item => {
    item.addEventListener("click", () => {
      visibilityModal(true);
    });
  });
  modalClose.addEventListener("click", () => {
    visibilityModal(false);
  });
  window.addEventListener("click", (e) => {
    if (e.target.classname === "modal") {
      visibilityModal(false);
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      visibilityModal(false);
    }
  });
  function visibilityModal(status) {
    if (status) {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  }
}

modal();
