const WolframController = () => {

  const activateForm = (form) => {
    form.addEventListener('submit', getFormData);
  };

  const getFormData = (e) => {
    e.preventDefault();
    const search = document.querySelector('#search').value;
    eel.printData(search)
  };

  return {
    getFormData,
    activateForm
  }
};

const Homepage = () => {
  const container = document.querySelector('.container');
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
    const form = document.createElement('form');
    const input = getSearchElement();
    const submit = getSubmitElement();
    form.appendChild(input);
    form.appendChild(submit);
    return form;
  };

  const populateWindow = () => {
    const form = getFormElement();
    container.appendChild(form);
    return form;
  };

  return {
    populateWindow,
  }
};

const homepage = Homepage();
const wolframcontroller = WolframController();
const form = homepage.populateWindow();
wolframcontroller.activateForm(form);
