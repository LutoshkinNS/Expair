import './_contacts.scss';
import ymaps from 'ymaps';
import mapMarker from '../../images/contacts/mapMarker.svg';

const map = (coord) => {
  setTimeout(() => {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then((maps) => {
        document.getElementById('contactsMapImg').classList.add('hide');
        const map = new maps.Map('map', {
          center: coord,
          zoom: 17,
          controls: ['zoomControl'],
        });
        map.geoObjects
          .add(new maps.Placemark(coord, {
            hintContent: 'Expair',
          }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: mapMarker,
            iconImageSize: [36, 51],
            iconImageOffset: [-16, -51],
          }));
      })
      .catch((error) => {
        if (error.type === 'error') {
          document.getElementById('contactsMapImg').classList.remove('hide');
        }
      });
  }, 0);
};

export default map;
