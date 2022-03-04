import './_header.scss';
import './modifications/_header-white.scss';
// burgerMenu
import selectionElementNav from '../burgerMenu/burgerMenu';
// scrollToFeedback
import scrollToFeedback from './scrollToFeedback';

const header = () => {
  function openBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');

    burgerBtn.onclick = () => {
      burgerMenu.classList.add('burger-menu_show');
    };

    document.onclick = (e) => {
      if (!e.target.matches('#burgerBtn') && (e.target.matches('#burgerMenuClose') || !e.target.closest('#burgerMenu'))) {
        burgerMenu.classList.remove('burger-menu_show');
      }
    };
  }

  scrollToFeedback();
  openBurgerMenu();
  selectionElementNav();
};

export default header;
