import './style.css';

// Get distance to top of site
const getDistanceToTop = () => {
  return document.documentElement.scrollTop;
};

// Scroll listener
document.addEventListener('scroll', () => {
  const distance = getDistanceToTop();
  if (distance > 200) {
    document.querySelector('.direction_indicator')!.classList.add('visible');
  } else {
    document.querySelector('.direction_indicator')!.classList.remove('visible');
  }
});
