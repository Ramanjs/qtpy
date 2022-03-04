const WolframController = () => {

  const activateForm = () => {
    homepage.populateWindow();
    const form = document.querySelector('form');
    form.addEventListener('submit', getFormData);
    menuController.activateMenuBtn();
  };

  const getFormData = (e) => {
    e.preventDefault();
    const search = document.querySelector('#wolfram').value;
    const req = {
      'api': 'wolfram',
      'search': search
    }
    sendRequest(req);
  };

  return {
    getFormData,
    activateForm
  }
};
