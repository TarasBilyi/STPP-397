import './js/burgerMenu';
import './js/headerScroll';
import './js/featureSwipper';
import './js/gallerySwipper';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
  offset: 0,
  startEvent: 'DOMContentLoaded',
});
