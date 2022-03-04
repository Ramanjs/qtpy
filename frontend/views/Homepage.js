const Homepage = () => {

  const getSearchElement = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'wolfram');
    input.setAttribute('placeholder', 'Ask me a question...');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', '');
    return input;
  };

  const getSubmitElement = () => {
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Search');
    submit.classList.add('button');
    return submit;
  };

  const getFormElement = () => {
    const form = document.createElement('form');
    const input = getSearchElement();
    const submit = getSubmitElement();
    form.appendChild(input);
    form.appendChild(submit);
    return form;
  };

  const getMenuElement = () => {
    const menu = document.createElement('div');
    menu.innerText = 'Menu';
    menu.classList.add('menu');
    menu.classList.add('button');
    return menu;
  };

  const getAnswerElement = () => {
    const answer = document.createElement('div');
    answer.innerText = 'Placeholder';
    answer.classList.add('answer');
    answer.classList.add('ansbefore');
    return answer;
  };

  const populateWindow = () => {
    clearScreen();
    const form = getFormElement();
    const menu = getMenuElement();
    const answer = getAnswerElement();
    container.appendChild(form);
    container.appendChild(answer);
    container.appendChild(menu);
  };

  const displayAnswer = (response) => {
    const answer = document.querySelector('.answer');
    answer.classList.remove('ansbefore');
    answer.innerText = response;
  };

  return {
    populateWindow,
    displayAnswer,
  }
};
