import './_cover.scss';

const cover = () => {
  // Сохранение в локальное хранилище наименования услуги для раскрытия конкретной услуги на странице услуг
  const setServiceName = () => {
    const links = document.querySelectorAll('.cover__item-link');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        const serviceName = link.querySelector('.cover__list-text');
        localStorage.setItem('serviceName', serviceName.innerHTML);
      });
    });
  };

  setServiceName();
};

export default cover;
