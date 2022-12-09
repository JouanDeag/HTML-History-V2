import './style.css';

// Get distance to top of site
const getDistanceToTop = () => {
  return document.documentElement.scrollTop;
};

// Scroll listener
document.addEventListener('scroll', () => {
  const distance = getDistanceToTop();
  const indicator = document.querySelector('.direction_indicator')!;
  if (distance > 200) {
    indicator.classList.add('visible');
    indicator.ariaHidden = 'false';
  } else {
    indicator.classList.remove('visible');
    indicator.ariaHidden = 'true';
  }
});
