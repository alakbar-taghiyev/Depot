export default function tab() {
  const contentTitle = document.querySelectorAll(".content__title button");
  const contentDetail = document.querySelectorAll(".content__detail");

  function detailNone() {
    contentDetail.forEach((detail) => {
      detail.style.display = "none";
    });
  }
  detailNone();
 
  function detailShow(i=0) {
    contentDetail[i].style.display = "block";
  }
  detailShow();

  contentTitle.forEach((title, index) => {
    title.addEventListener("click", () => {
      detailNone();
      detailShow(index);
    });
  });
}
