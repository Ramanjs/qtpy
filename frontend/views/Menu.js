const Menu = () => {

  const getButton = (name) => {
    const button = document.createElement('div');
    button.classList.add(name);
    button.classList.add('api');
    button.classList.add('button');
    return button;
  };

  const getBackButton = () => {
    const back = document.createElement('div');
    back.classList.add('button');
    back.classList.add('back');
    return back;
  };

  const populateWindow = () => {
    clearScreen();
    const weather = getButton('weather');
    weather.innerText = 'Weather forecast';
    const lyrics = getButton('lyrics');
    lyrics.innerText = 'Search for song lyrics';
    const stoicism = getButton('stoicism');
    stoicism.innerText = 'Stoicism quotes';
    const numbers = getButton('numbers');
    numbers.innerText = 'Facts about numbers';
    const iss = getButton('iss');
    iss.innerText = 'Current location of the International Space Station';
    const excuses = getButton('excuses');
    excuses.innerText = 'Get random excuses for situations';
    const dog = getButton('dog');
    dog.innerText = 'Random dog photos'
    const food = getButton('food');
    food.innerText = 'Search food recipes';
    const programming = getButton('programming');
    programming.innerText = 'Programming quotes';
    const back = getBackButton();
    back.innerText = 'Go Back';
    container.appendChild(weather);
    container.appendChild(lyrics);
    container.appendChild(stoicism);
    container.appendChild(numbers);
    container.appendChild(iss);
    container.appendChild(excuses);
    container.appendChild(dog);
    container.appendChild(food);
    container.appendChild(programming);
    container.appendChild(back);
  }

  return {
    populateWindow
  }
};
