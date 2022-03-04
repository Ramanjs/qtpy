const container = document.querySelector('.container');

const homepage = Homepage();
const quote = Quote();
const menu = Menu();

const wolframController = WolframController();
const menuController = MenuController();
const stoicismController = StoicismController();
const programmingController = ProgrammingController();
const numberController = NumberController();

eel.expose(getInfoFromBackend)
function getInfoFromBackend(api, response) {
  console.log(response);
  switch (api) {
    case 'wolfram':
      homepage.displayAnswer(response);
      break;
    case 'wikipedia':
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
  }
}

const sendRequest = (req) => {
  eel.fetchData(req);
}

const clearScreen = () => {
  while (container.firstChild) { 
    container.removeChild(container.lastChild);
  }
}

wolframController.activateForm();
