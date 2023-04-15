function sideMenu() {
   const bars = document.querySelector('.nav__right .fa-bars');
   const modal = document.querySelector('.modalSideMenu');
   const sideMenu = document.querySelector('.sideMenu');
   const modalClose = document.querySelector('.modalSideMenu .sideArea__inner .modal__close');

   bars.addEventListener('click', () => {
    modal.style.display = 'block'
    sideMenu.style.right = '0px';
    console.log(bars);
   });
   modalClose.addEventListener('click', () => {
    sideMenu.style.right = '-605px';
    modal.style.display = 'none';
   console.log(modalClose);
   });
   window.addEventListener('click', (e) => {
    if(e.target.className === 'modalSideMenu') {
        sideMenu.style.right = '-605px';
        modal.style.display = 'none';
    }
   })
   window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
        sideMenu.style.right = '-605px';
        modal.style.display = 'none';
    }
   })
}
sideMenu();