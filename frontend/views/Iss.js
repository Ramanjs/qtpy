const Iss = function() {

  let map = null;
  let marker = null;

  const getMapElement = () => {
    const mapElement = document.createElement('div');
    mapElement.setAttribute('id', 'map');
    return mapElement;
  };

  const populateWindow = () => {
    clearScreen();
    const mapElement = getMapElement();
    container.appendChild(mapElement);
    this.map = L.map('map').setView([28.70, 77.10], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFtYW5qcyIsImEiOiJjbDBlOXpnZ2IwaDR4M2twbzdwMzZhbGF0In0.lXfegkVFWeAx_DWbDbFWyQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);

    this.marker = L.circle([28.70, 77.10], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 100000
    }).addTo(this.map);
  };

  const updateMap = (response) => {
    const lat = Number(response['lat']);
    const lon = Number(response['lon']);
    this.marker.setRadius(1000);
    this.marker = L.circle([lat, lon], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 100000
    }).addTo(this.map);

    this.map.panTo([lat, lon], animate=true);
  };

  return {
    populateWindow,
    updateMap
  }
};
