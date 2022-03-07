const MenuController = () => {
  const activateMenu = () => {
    menu.populateWindow();
    document.querySelector('.weather').addEventListener('click', weatherController.init)
    document.querySelector('.stoicism').addEventListener('click', stoicismController.init);
    document.querySelector('.numbers').addEventListener('click', numberController.init);
    document.querySelector('.iss').addEventListener('click', issController.init);
    document.querySelector('.excuses').addEventListener('click', excuseController.init);
    document.querySelector('.dog').addEventListener('click', dogController.init);
    document.querySelector('.food').addEventListener('click', recipeController.init);
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
