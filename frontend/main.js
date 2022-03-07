const container = document.querySelector('.container');

const homepage = Homepage();
const quote = Quote();
const menu = Menu();
const dog = Dog();
const excuse = Excuse();
const weather = Weather();
const iss = Iss();
const recipe = Recipe();

const wolframController = WolframController();
const menuController = MenuController();
const stoicismController = StoicismController();
const programmingController = ProgrammingController();
const numberController = NumberController();
const dogController = DogController();
const excuseController = ExcuseController();
const weatherController = WeatherController();
const issController = IssController();
const recipeController = RecipeController();

const clearScreen = () => {
  while (container.firstChild) { 
    container.removeChild(container.lastChild);
  }
}

const initLoader = () => {
  clearScreen();
  const loader = document.createElement('div');
  loader.classList.add('loader');
  container.appendChild(loader);
}

const activateBackBtn = () => {
  const back = document.querySelector('.back');
  if (back.classList.contains('iss')) {
    back.addEventListener('click', () => {
      issController.removeInterval();
      menuController.activateMenu();
    });
  } else {
    back.addEventListener('click', menuController.activateMenu)
  }
}

const sendRequest = (req) => {
  eel.fetchData(req);
}

eel.expose(getInfoFromBackend)
function getInfoFromBackend(api, response) {
  console.log(response);
  switch (api) {
    case 'wolfram':
      homepage.displayAnswer(response);
      break;
    case 'weather':
      weather.displayWeather(response);
      break;
    case 'stoicism':
      r = {
        'quote': response.data.quote,
        'author': response.data.author
      };
      quote.populateWindow(r);
      break;
    case 'numbers':
      r = {
        'quote': response,
        'author': ''
      }
      quote.populateWindow(r);
      break;
    case 'programming':
      r = {
        'quote': response.en,
        'author': response.author
      }
      quote.populateWindow(r);
      break;
    case 'dog':
      dog.populateWindow(response['url']);
      break;
    case 'excuse':
      excuse.populateWindow();
      excuse.displayAnswer(response);
      excuseController.activateForm();
      break;
    case 'iss':
      issController.receiveResponse(response);
      break;
    case 'food':
      recipe.displayRecipe(response);
      break;
  }
}

wolframController.activateForm();
