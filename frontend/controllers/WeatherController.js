const WeatherController = () => {
  const init = () => {
    initLoader();
    const req = {
      'api': 'weather',
      'city': 'New York'
    }
    sendRequest(req);
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
    init,
    activateForm
  }
};
