import './_services.scss';

const servicesAccordion = () => {
  const servicesAccordionItems = Array.from(document.getElementsByClassName('services__accordion-list-item'));

  servicesAccordionItems.forEach((item, idx) => {
    const servicesAccordionItemContent = item.querySelector('.services__list');
    const verticalElemPlusIcon = item.querySelector('.services__icon-plus-vertical');
    const horizontalElemPlusIcon = item.querySelector('.services__icon-plus-horizontal');

    servicesAccordionItems[idx].onclick = () => {
      if (servicesAccordionItemContent.style.maxHeight) {
        servicesAccordionItemContent.style.maxHeight = null;
        verticalElemPlusIcon.style.transform = 'rotate(0deg)';
        horizontalElemPlusIcon.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          servicesAccordionItemContent.style.marginTop = '0px';
        }, 100);
      } else {
        servicesAccordionItemContent.style.maxHeight = `${servicesAccordionItemContent.scrollHeight}px`;
        verticalElemPlusIcon.style.transform = 'rotate(90deg)';
        horizontalElemPlusIcon.style.transform = 'rotate(180deg)';
        servicesAccordionItemContent.style.marginTop = '43px';
      }
    };
  });
};

export default servicesAccordion;
