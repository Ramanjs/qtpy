const ExcuseController = () => {
  const init = () => {
    excuse.populateWindow();
    activateForm();
  };

  const activateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', sendExcuseRequest);
  };

  const sendExcuseRequest = (e) => {
    e.preventDefault();
    const category = document.querySelector('select').value;
    console.log(category);
    const req = {
      'api': 'excuse',
      'category': category
    }
    sendRequest(req);
  };

  return {
    sendExcuseRequest,
    init
  }
};
