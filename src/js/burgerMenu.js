const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerWrapEl = document.querySelector('[data-menu-state]');
const navLinks = document.querySelectorAll('[data-menu-link]');
const body = document.querySelector('body');

openBtnEl.addEventListener('click', openMenu);
closeBtnEl.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function openMenu() {
  burgerMenuEl.dataset.visible = 'open';
  burgerWrapEl.dataset.menuState = 'open';
  body.dataset.scroll = 'locked';
}

function closeMenu() {
  burgerMenuEl.dataset.visible = 'close';
  burgerWrapEl.dataset.menuState = 'close';
  delete body.dataset.scroll;
}
