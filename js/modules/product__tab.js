const productTitle = document.querySelectorAll('.product__title button');
const productDetail = document.querySelectorAll('.product__detail');

function detailNone() {
    productDetail.forEach(detail => {
        detail.style.display = 'none';
    })
}

detailNone();

function detailShow(i = 0) {
    productDetail[i].style.display = 'block'
}

detailShow();

productTitle.forEach((title, index) => {
    title.addEventListener('click', () => {
        detailNone();
        detailShow(index);
    })
}) 