const ExcuseController = () => {
  const init = () => {
    initLoader();
    const req = {
      'api': 'excuse',
      'category': 'family',
    }
    sendRequest(req);
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
    init,
    activateForm
  }
};
