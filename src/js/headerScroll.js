const headerScroll = document.querySelector('[data-header-scroll]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    headerScroll.dataset.headerScroll = 'on';
  } else {
    headerScroll.dataset.headerScroll = 'off';
  }
});
