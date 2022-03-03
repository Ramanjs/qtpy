const Menu = () => {
  const container = document.querySelector('.container')
  const wikipedia = document.createElement('div');
  const lyrics = document.createElement('div');
  const excuses = document.createElement('div');

  const populateWindow = () => {
    clearScreen();
    wikipedia.innerText = 'Wikipedia';
    lyrics.innerText = 'Lyrics';
    excuses.innerText = 'Excuses';
    container.appendChild(wikipedia);
    container.appendChild(lyrics);
    container.appendChild(excuses);
  }

  return {
    populateWindow
  }
};
