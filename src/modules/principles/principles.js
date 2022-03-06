import './principles.scss';

const principles = () => {
  const principlesItems = document.querySelectorAll('.principles__animation-item');
  const principlesList = document.querySelector('.principles__list');

  const animationList = () => {
    if (principlesList) {
      const scrollToList = principlesList.getBoundingClientRect().top;
      const windowScrollPosition = window.pageYOffset;

      if (scrollToList <= windowScrollPosition) {
        document.removeEventListener('scroll', animationList);
        principlesItems.forEach((principlesItem, idx) => {
          setTimeout(() => {
            principlesItem.style.transform = 'translateX(0%)';
          }, 250 * (idx + 1));
        });
      }
    }
  };

  document.addEventListener('scroll', animationList);
  animationList();
};

export default principles;
