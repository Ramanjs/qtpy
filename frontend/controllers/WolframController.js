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
