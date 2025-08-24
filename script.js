
const mis = document.querySelector('.mis');
const menu = document.querySelector('.menu');

const updateMenuOffset = () => {
    const misHeight = mis.offsetHeight;
    menu.style.marginTop = `${misHeight + 5}px`; // +5 for gap
};

const toggleMis = () => {
    mis.classList.toggle('open');
    updateMenuOffset();
};

window.addEventListener('DOMContentLoaded', () => {
  const syncWidth = () => {
    mis.style.width = `${menu.getBoundingClientRect().width}px`;
  };
  syncWidth();
  window.addEventListener('resize', syncWidth);
});


  document.querySelector('.btn_style').addEventListener('click', function () {
    this.parentElement.classList.toggle('open')});

