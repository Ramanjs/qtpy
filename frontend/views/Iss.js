const Iss = () => {
  const getMapElement = () => {
    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    return map
  };

  const populateWindow = () => {
  };

  const displayMap = (response) => {
    clearScreen();
    const mapElement = getMapElement();
    container.appendChild(mapElement);
    const lat = Number(response['lat']);
    const lon = Number(response['lon']);
    const map = L.map('map').setView([lat, lon], 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFtYW5qcyIsImEiOiJjbDBlOXpnZ2IwaDR4M2twbzdwMzZhbGF0In0.lXfegkVFWeAx_DWbDbFWyQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    const circle = L.circle([lat, lon], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500000
    }).addTo(map);
  };

  return {
    displayMap
  }
};
