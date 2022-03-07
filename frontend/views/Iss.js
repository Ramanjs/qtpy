const Iss = function() {

  let map = null;
  let marker = null;

  const getMapElement = () => {
    const mapElement = document.createElement('div');
    mapElement.setAttribute('id', 'map');
    return mapElement;
  };

  const getInfoElement = () => {
    const heading = document.createElement('div');
    heading.classList.add('iss-heading');
    heading.innerText = 'Current location (updates every 5 seconds):';
    const latitude = document.createElement('div');
    latitude.classList.add('iss-latitude');
    const longitude = document.createElement('div');
    longitude.classList.add('iss-longitude');
    const info = document.createElement('div');
    info.classList.add('iss-info');
    info.appendChild(heading);
    info.appendChild(latitude);
    info.appendChild(longitude);
    return info;
  };

  const getBackButton = () => {
    const back = document.createElement('div');
    back.classList.add('button');
    back.classList.add('back');
    back.innerText = 'Go Back';
    return back;
  };

  const populateWindow = () => {
    clearScreen();
    const infoElement = getInfoElement();
    container.appendChild(infoElement);
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
    
    const back = getBackButton();
    back.classList.add('iss');
    container.appendChild(back);
    activateBackBtn();
  };

  const updateMap = (response) => {
    const lat = Number(response['lat']);
    const lon = Number(response['lon']);
    document.querySelector('.iss-latitude').innerText = 'Latitude: ' + lat;
    document.querySelector('.iss-longitude').innerText = 'Longitude: ' + lon;
    this.marker.setRadius(500);
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
