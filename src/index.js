import "./style.css";

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');
const lines = document.querySelectorAll('.header__line');
const anchor = document.querySelector('.footer__anchor');

function burgerClick() {
    // Toggle Navigation
    menu.classList.toggle('header__menu_active');

    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else link.style.animation = `menuFade 0.5s ease forwards ${index / 7}s`;
    });

    // Burger Animation
    lines[0].classList.toggle('header__line_one');
    lines[1].classList.toggle('header__line_two');
    lines[2].classList.toggle('header__line_three');
};

burger.addEventListener('click', burgerClick);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

anchor.addEventListener('click', scrollToTop);