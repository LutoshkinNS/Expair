import './_burgerMenu.scss';

const selectionElementNav = () => {
  const sticky = () => {
    const elementNav = Array.from(document.getElementsByClassName('burger-menu__nav-item-link'));
    const title = document.querySelector('h1');

    if (document.documentElement.clientWidth <= 768) {
      elementNav.forEach((item) => {
        if (item.innerText === title.innerText) {
          item.classList.add('burger-menu_active');
        }
      });
    } else {
      elementNav.forEach((item) => {
        if (item.innerText === title.innerText) {
          item.classList.remove('burger-menu_active');
        }
      });
    }
  };

  sticky();
  window.addEventListener('resize', () => {
    sticky();
  });
};

export default selectionElementNav;
