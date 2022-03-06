const WeatherController = () => {
  const init = () => {
    weather.populateWindow();
    activateForm();
  };

  const activateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', sendWeatherRequest);
  };

  const sendWeatherRequest = (e) => {
    e.preventDefault();
    const city = document.querySelector('#search').value;
    const req = {
      'api': 'weather',
      'city': city
    }
    sendRequest(req);
  };

  return {
    sendWeatherRequest,
    init
  }
};
