import './_services.scss';

const removeUnnecessary = (text) => text.replace(/<\/?[^>]+>/g, '').replace(/\s+/g, '').trim();

const services = () => {
  const servicesAccordion = () => {
    const servicesAccordionItems = Array.from(document.getElementsByClassName('services__accordion-list-item'));

    servicesAccordionItems.forEach((item, idx) => {
      const servicesAccordionItemContent = item.querySelector('.services__list');
      const verticalElemPlusIcon = item.querySelector('.services__icon-plus-vertical');
      const horizontalElemPlusIcon = item.querySelector('.services__icon-plus-horizontal');

      const openAccordion = () => {
        servicesAccordionItemContent.style.maxHeight = `${servicesAccordionItemContent.scrollHeight}px`;
        verticalElemPlusIcon.style.transform = 'rotate(90deg)';
        horizontalElemPlusIcon.style.transform = 'rotate(180deg)';
        servicesAccordionItemContent.classList.add('services__list-active');
      };

      const closeAccordion = () => {
        servicesAccordionItemContent.style.maxHeight = null;
        verticalElemPlusIcon.style.transform = 'rotate(0deg)';
        horizontalElemPlusIcon.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          servicesAccordionItemContent.classList.remove('services__list-active');
        }, 100);
      };

      // Получение наименования услуги для автоматического раскрытия
      const getServiceName = () => {
        const serviceNameData = localStorage.getItem('serviceName');

        if (serviceNameData !== null) {
          const thisServiceName = removeUnnecessary(item.querySelector('.services__title').innerHTML);

          if (removeUnnecessary(serviceNameData) === thisServiceName) {
            const scrollToEl = item.getBoundingClientRect().top; /* Величина необходимая для скрола до элемента */
            const heightHeader = document.querySelector('.header').getBoundingClientRect().height;
            window.scrollTo(0, scrollToEl - heightHeader);
            setTimeout(() => {
              openAccordion();
              localStorage.removeItem('serviceName');
            }, 300);
          }
        }
      };

      getServiceName();

      servicesAccordionItems[idx].onclick = () => {
        if (servicesAccordionItemContent.style.maxHeight) {
          closeAccordion();
        } else {
          openAccordion();
        }
      };
    });
  };
  window.onload = () => {
    servicesAccordion();
  };
};

export default services;
