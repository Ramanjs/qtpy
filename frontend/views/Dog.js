const Dog = () => {
  const getImageElement = () => {
    const img = document.createElement('img');
    img.classList.add('dog');
    return img;
  };

  const getBackButton = () => {
    const back = document.createElement('div');
    back.classList.add('button');
    back.classList.add('back');
    back.innerText = 'Go Back';
    return back;
  };

  const populateWindow = (response) => {
    clearScreen();
    const img = getImageElement();
    img.setAttribute('src', response);
    const back = getBackButton();
    container.appendChild(img);
    container.appendChild(back);
    activateBackBtn();
  };

  return {
    populateWindow
  }
};
