const container = document.querySelector('.container');
const homepage = Homepage();
const wolframcontroller = WolframController();
const menucontroller = MenuController();
const menu = Menu();

eel.expose(getInfoFromBackend)
function getInfoFromBackend(response) {
  homepage.displayAnswer(response);
}

const clearScreen = () => {
  while (container.firstChild) { 
    container.removeChild(container.lastChild);
  }
}

const buttons = homepage.populateWindow();
const form = buttons.form;
const menuButton = buttons.menu;

wolframcontroller.activateForm(form);
menucontroller.activateMenu(menuButton, menu);
