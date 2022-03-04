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

  const populateWindow = (response) => {
    clearScreen();
    const text = response.quote;
    const author = response.author;
    const p = getQuoteElement();
    const a = getAuthorElement();
    p.innerText = text;
    if (response.author != '') {
      a.innerText = ' - ' + author;
    }
    container.appendChild(p);
    container.appendChild(a);
  };

  return {
    populateWindow
  }
};
