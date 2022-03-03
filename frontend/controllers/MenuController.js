const MenuController = () => {
  const activateMenu = (menuButton, menu) => {
    menuButton.addEventListener('click', menu.populateWindow);
  };

  return {
    activateMenu
  }
};
