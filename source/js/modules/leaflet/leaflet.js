import L from '../../vendor/leaflet';

let initLeaflet = () => {
  const map = L.map('map', {scrollWheelZoom: false, dragging: false}).setView([59.970371692077016, 30.307493299822706], 14);
  L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  let myIcon = L.icon({
    iconUrl: 'img/svg/pin.svg',
    iconSize: [38, 50],
  });

  L.marker([59.970371692077016, 30.307493299822706], {icon: myIcon}).addTo(map);
};

export {initLeaflet};
