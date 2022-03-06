const Weather = () => {
  const getSearchElement = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search')
    input.setAttribute('placeholder', 'Type location...');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', '');
    return input;
  };

  const getSubmitElement = () => {
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Search');
    submit.classList.add('button');
    return submit;
  };

  const getFormElement = () => {
    const form = document.createElement('form');
    const input = getSearchElement();
    const submit = getSubmitElement();
    form.appendChild(input);
    form.appendChild(submit);
    return form;
  };

  const populateWindow = () => {
    clearScreen();
    const form = getFormElement();
    container.appendChild(form);
  };
  
  const getMainWindow = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    const description = document.createElement('div');
    description.classList.add('weather-description');
    const humidity = document.createElement('div');
    humidity.classList.add('weather-humidity');
    const windSpeed = document.createElement('div');
    windSpeed.classList.add('weather-windspeed');
    const temp = document.createElement('div');
    temp.classList.add('weather-temp');
    const icon = document.createElement('div');
    icon.classList.add('weather-icon');
    const img = document.createElement('img');
    icon.appendChild(img);
    main.appendChild(description);
    main.appendChild(humidity);
    main.appendChild(windSpeed);
    main.appendChild(temp);
    main.appendChild(icon);
    return main;
  };

  const displayWeather = (response) => {
    const main = getMainWindow();
    container.appendChild(main);
    const description = document.querySelector('.weather-description');
    description.innerText = response["description"];
    const humidity = document.querySelector('.weather-humidity');
    humidity.innerText = 'Humidity ' + response["humidity"] + '%';
    const windSpeed = document.querySelector('.weather-windspeed');
    windSpeed.innerText = 'Windspeed ' + response["windspeed"] + ' km/h';
    const temp = document.querySelector('.weather-temp');
    temp.innerHTML = response["temp"] + '&deg;C';
    const img = document.querySelector('.weather-icon img');
    img.setAttribute('src', response['url'])
  };

  return {
    populateWindow,
    displayWeather
  }
};
