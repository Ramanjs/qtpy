const Excuse = () => {
  const getOptionElement = (category) => {
    const option = document.createElement('option');
    option.innerText = category
    option.setAttribute('value', category.charAt(0).toLowerCase() + category.slice(1));
    return option;
  };

  const getDropdownElement = () => {
    const select = document.createElement('select');
    //select.
    return select
  };

  const getSubmitElement = () => {
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Search');
    submit.classList.add('button');
    return submit;
  };

  const getExcuseForm = () => {
    const form = document.createElement('form');
    const family = getOptionElement('Family');
    const office = getOptionElement('Office');
    const children = getOptionElement('Children');
    const college = getOptionElement('College');
    const party = getOptionElement('Party');
    const select = getDropdownElement();
    const submit = getSubmitElement();
    select.appendChild(family);
    select.appendChild(office);
    select.appendChild(children);
    select.appendChild(college);
    select.appendChild(party);
    form.appendChild(select);
    form.appendChild(submit);
    return form;
  };

  const populateWindow = () => {
    clearScreen();
    const form = getExcuseForm();
    const answer = getAnswerElement();
    container.appendChild(form);
    container.appendChild(answer);
  };

  const getAnswerElement = () => {
    const answer = document.createElement('div');
    answer.innerText = 'Placeholder';
    answer.classList.add('answer');
    answer.classList.add('ansbefore');
    return answer;

  };

  const displayAnswer = (response) => {
    const answer = document.querySelector('.answer');
    answer.classList.remove('ansbefore');
    answer.innerText = response;
  };

  return {
    populateWindow,
    displayAnswer
  }
};
