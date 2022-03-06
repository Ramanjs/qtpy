const container = document.querySelector('.container');

const homepage = Homepage();
const quote = Quote();
const menu = Menu();
const dog = Dog();
const excuse = Excuse();
const weather = Weather();
const iss = Iss();

const wolframController = WolframController();
const menuController = MenuController();
const stoicismController = StoicismController();
const programmingController = ProgrammingController();
const numberController = NumberController();
const dogController = DogController();
const excuseController = ExcuseController();
const weatherController = WeatherController();
const issController = IssController();

const clearScreen = () => {
  while (container.firstChild) { 
    container.removeChild(container.lastChild);
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
    case 'lyrics':
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
      excuse.displayAnswer(response);
      break;
    case 'iss':
      //iss.displayMap(response);
      issController.receiveResponse(response);
      break;
  }
}

wolframController.activateForm();
