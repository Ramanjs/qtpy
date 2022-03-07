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

  const getMainWindow = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    const description = document.createElement('div');
    description.classList.add('weather-description');
    //const humidity = document.createElement('div');
    //humidity.classList.add('weather-humidity');
    //const windSpeed = document.createElement('div');
    //windSpeed.classList.add('weather-windspeed');
    const loc = document.createElement('div');
    loc.classList.add('weather-loc');
    const dateTime = document.createElement('div');
    dateTime.classList.add('weather-date-time');
    const temp = document.createElement('div');
    temp.classList.add('weather-temp');
    const icon = document.createElement('div');
    icon.classList.add('weather-icon');
    const img = document.createElement('img');
    img.classList.add('filter-green');
    icon.appendChild(img);
    main.appendChild(description);
    main.appendChild(loc);
    main.appendChild(dateTime);
    //main.appendChild(humidity);
    //main.appendChild(windSpeed);
    main.appendChild(temp);
    main.appendChild(icon);
    return main;
  };

  const getDayElement = (dayName) => {
    const day = document.createElement('div');
    day.classList.add('day');
    //day.classList.add(dayName);
    const name = document.createElement('div');
    name.classList.add('name-' + String(dayName));
    name.classList.add('name');
    const maxTemp = document.createElement('div');
    maxTemp.classList.add('max-' + String(dayName));
    maxTemp.classList.add('max');
    const minTemp = document.createElement('div');
    minTemp.classList.add('min-' + String(dayName));
    minTemp.classList.add('min');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    const img = document.createElement('img');
    img.classList.add('filter-green');
    img.classList.add('img-' + String(dayName));
    icon.appendChild(img);
    day.appendChild(name);
    day.appendChild(maxTemp);
    day.appendChild(minTemp);
    day.appendChild(icon);
    return day;
  };

  const getDailyWindow = () => {
    const daily = document.createElement('div');
    daily.classList.add('daily');
    const first = getDayElement('0');
    daily.appendChild(first);
    const second = getDayElement('1');
    daily.appendChild(second);
    const third = getDayElement('2');
    daily.appendChild(third);
    const fourth = getDayElement('3');
    daily.appendChild(fourth);
    const fifth = getDayElement('4');
    daily.appendChild(fifth);
    const sixth = getDayElement('5');
    daily.appendChild(sixth);
    const seventh = getDayElement('6');
    daily.appendChild(seventh);
    return daily;
  };

  const getBackButton = () => {
    const back = document.createElement('div');
    back.classList.add('button');
    back.classList.add('back');
    back.innerText = 'Go Back';
    return back;
  };

  const displayMainWeather = (response) => {
   const description = document.querySelector('.weather-description');
    description.innerText = response["description"];
    //const humidity = document.querySelector('.weather-humidity');
    //humidity.innerText = 'Humidity ' + response["humidity"] + '%';
    //const windSpeed = document.querySelector('.weather-windspeed');
    //windSpeed.innerText = 'Windspeed ' + response["windspeed"] + ' km/h';
    const temp = document.querySelector('.weather-temp');
    temp.innerHTML = response["temp"] + ' &deg;C';
    const img = document.querySelector('.weather-icon img');
    img.setAttribute('src', response['url'])
  };

  const displayOneDay = (index, dayName, data) => {
    const name = document.querySelector('.' + 'name-' + index );
    name.innerText = dayName;
    const maxTemp = document.querySelector('.' + 'max-' + index);
    maxTemp.innerHTML = data['max'] + ' &deg;C';
    const minTemp = document.querySelector('.' + 'min-' + index);
    minTemp.innerHTML = data['min'] + ' &deg;C';
    const img = document.querySelector('.' + 'img-' + index);
    img.setAttribute('src', data['url']);
  };
  
  const displayDailyWeather = (response) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date();
    let today = date.getDay();
    const day = days[today];
    const time = date.toLocaleTimeString();
    const loc = document.querySelector('.weather-loc');
    loc.innerText = response["loc"];
    const dateTime = document.querySelector('.weather-date-time');
    dateTime.innerText = time + ', ' + day;
    today += 1;
    today %= 7;
    for (let i = 0; i <= 6; i++) {
      displayOneDay(i, days[(today + i) % 7], response['daily'][String(i)]);
    }
  };

  const displayWeather = (response) => {
    displayMainWeather(response);
    displayDailyWeather(response);
  };

  const populateWindow = () => {
    clearScreen();
    const form = getFormElement();
    container.appendChild(form);
    const main = getMainWindow();
    container.appendChild(main);
    const heading = document.createElement('div');
    heading.classList.add('daily-heading');
    heading.innerText = '7 day forecast';
    container.appendChild(heading);
    const daily = getDailyWindow();
    container.appendChild(daily);
    const back = getBackButton();
    container.appendChild(back);
    activateBackBtn();
  };
  
  return {
    populateWindow,
    displayWeather
  }
};
