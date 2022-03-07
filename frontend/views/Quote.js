const Quote = () => {
  const getQuoteElement = () => {
    const p = document.createElement('div');
    p.classList.add('answer');
    p.classList.add('quote');
    return p;
  };

  const getAuthorElement = () => {
    const a = document.createElement('div');
    a.classList.add('answer');
    a.classList.add('author');
    return a;
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
    const text = response.quote;
    const author = response.author;
    const p = getQuoteElement();
    const a = getAuthorElement();
    const back = getBackButton();
    p.innerText = text;
    if (response.author != '') {
      a.innerText = ' - ' + author;
    }
    container.appendChild(p);
    container.appendChild(a);
    container.appendChild(back);
    activateBackBtn();
  };

  return {
    populateWindow
  }
};
