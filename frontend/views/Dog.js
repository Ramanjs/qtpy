const Dog = () => {
  const getImageElement = () => {
    const img = document.createElement('img');
    img.classList.add('dog');
    return img;
  }

  const populateWindow = (response) => {
    clearScreen();
    const img = getImageElement();
    img.setAttribute('src', response);
    container.appendChild(img);
  };

  return {
    populateWindow
  }
};
