const buttonOfBurger = document.getElementById('burger-button');
let burgerMenuOpened = false;

buttonOfBurger.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const burgerMenu = document.getElementById('burger-menu');
  const body = document.getElementById('body');

  if (!burgerMenuOpened) {
    burgerMenu.classList.add('opened');
    body.classList.add('hidden');

    burgerMenuOpened = true;
  } else {
    burgerMenu.classList.remove('opened');
    body.classList.remove('hidden');

    burgerMenuOpened = false;
  };
});