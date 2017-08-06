/* global document */
import SmoothScroll from 'smooth-scroll';

const scrollToElement = (e, element) => {
  e.preventDefault();
  const scroll = new SmoothScroll();
  const scrollTo = document.getElementById(element);
  scroll.animateScroll(scrollTo);
};

const extractErrors = (error) => {
  console.log(error)
};

export {
  scrollToElement,
  extractErrors,
};
