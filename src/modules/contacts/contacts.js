import './_contacts.scss';
import ymaps from 'ymaps';

const map = () => {
  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then((maps) => {
      document.getElementById('contactsMapImg').classList.add('hide');
      const map = new maps.Map('map', {
        center: [58.60066121, 49.66926593],
        zoom: 17,
        controls: ['zoomControl'],
      });
      map.geoObjects
        .add(new maps.Placemark([58.60066121, 49.66926593], {}, {
          preset: 'islands#yellowDotIconWithCaption',
        }));
    })
    .catch((error) => {
      if (error.type === 'error') {
        document.getElementById('contactsMapImg').classList.remove('hide');
      }
    });
};

export default map;
