const MenuController = () => {
  const activateMenu = () => {
    menu.populateWindow();
    document.querySelector('.wikipedia').addEventListener('click', sendRequest);
    document.querySelector('.lyrics').addEventListener('click', sendRequest);
    document.querySelector('.stoicism').addEventListener('click', stoicismController.sendStoicismRequest);
    document.querySelector('.numbers').addEventListener('click', numberController.sendNumberRequest);
    //document.querySelector('.iss').addEventListener('click', listener);
    //document.querySelector('.excuses').addEventListener('click', listener);
    //document.querySelector('.dog').addEventListener('click', listener);
    //document.querySelector('.food').addEventListener('click', listener);
    document.querySelector('.programming').addEventListener('click', programmingController.sendProgrammingRequest);
    document.querySelector('.back').addEventListener('click', wolframController.activateForm);
  };

  const activateMenuBtn = () => {
    const menuButton = document.querySelector('.menu');
    menuButton.addEventListener('click', activateMenu);
  };

  return {
    activateMenu,
    activateMenuBtn
  }
};
