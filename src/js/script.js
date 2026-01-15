import "../sass/style.scss";

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
     
  menu.classList.remove('active');


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menu.classList.remove('active');
    }
});
// счетчик процентов

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

