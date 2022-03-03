const Homepage = () => {

  const container = document.querySelector('.container');
  const answer = document.createElement('p');
  const form = document.createElement('form');
  const menu = document.createElement('div');

  const getSearchElement = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Ask my a question...');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', '');
    return input;
  };

  const getSubmitElement = () => {
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Search');
    return submit;
  };

  const getFormElement = () => {
    const input = getSearchElement();
    const submit = getSubmitElement();
    form.appendChild(input);
    form.appendChild(submit);
    return form;
  };

  const populateWindow = () => {
    clearScreen();
    menu.innerText = 'Menu';
    const form = getFormElement();
    container.appendChild(form);
    container.appendChild(answer);
    container.appendChild(menu);
    return {
      form,
      menu
    }
  };

  const displayAnswer = (response) => {
    answer.style.border = '2px solid black';
    answer.innerText = response
  };

  return {
    populateWindow,
    displayAnswer,
  }
};

