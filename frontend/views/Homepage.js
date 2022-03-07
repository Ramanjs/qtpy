const Homepage = () => {
  const getHeadingElement = () => {
    const heading = document.createElement('div');
    heading.classList.add('home-heading');
    heading.innerText = 'Hello, I am Wolfram Alpha. You can ask me any short question.'
    return heading;
  }
  const getSearchElement = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'For example: "How are you"');
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
    menu.innerText = 'Check out some other cool APIs';
    menu.classList.add('menu');
    menu.classList.add('button');
    return menu;
  };

  const getAnswerElement = () => {
    const answer = document.createElement('div');
    answer.innerText = ' ';
    answer.classList.add('answer');
    answer.classList.add('ansbefore');
    return answer;
  };

  const populateWindow = () => {
    clearScreen();
    const heading = getHeadingElement();
    const form = getFormElement();
    const menu = getMenuElement();
    const answer = getAnswerElement();
    container.appendChild(heading);
    container.appendChild(form);
    container.appendChild(answer);
    container.appendChild(menu);
  };

  const displayAnswer = (response) => {
    const answer = document.querySelector('.answer');
    answer.classList.remove('ansbefore');
    answer.innerHTML = '';
    //answer.innerText = response;
    //for (let i = 0; i < response.length; i++) {
      //a += response.charAt(i);
      //setTimeout(() => {
        //answer.innerHTML = a;
      //}, 1000, a, answer);
    let index = 0;
    const typeAnimate = () => {
      if (index < response.length) {
        document.querySelector(".answer").innerHTML += response.charAt(index);
        index++;
        setTimeout(typeAnimate, 50);
      }
    };
    typeAnimate();
  };

  return {
    populateWindow,
    displayAnswer
  }
};
