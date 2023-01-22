const burger = document.querySelector('.navToggle');
const navList = document.querySelector('.nav__list');
const btnToggle = document.querySelector('.header__btn--holder')
const headerDisplay = document.querySelector('.header');


burger.addEventListener('click', () => {
    navList.classList.toggle('nav-open')
    btnToggle.classList.toggle('display')
    headerDisplay.classList.toggle('.header__position')
});