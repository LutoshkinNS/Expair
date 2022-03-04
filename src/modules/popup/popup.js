import './_popup.scss';

const closePopup = () => {
  const popup = document.getElementById('popup');

  window.onclick = (e) => {
    const { target } = e;

    if (target.closest('.popup__close') || target.matches('.popup__overlay')) {
      popup.classList.remove('show');
    }
  };
};

export default closePopup;
