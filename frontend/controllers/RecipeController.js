const RecipeController = () => {
  const init = () => {
    initLoader();
    const req = {
      'api': 'food',
      'recipe': 'chicken'
    }
    sendRequest(req);
  };

  const activateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', sendRecipeRequest);
  };

  const sendRecipeRequest = (e) => {
    e.preventDefault();
    const recipe = document.querySelector('#search').value;
    const req = {
      'api': 'food',
      'recipe': recipe
    }
    sendRequest(req);
  };

  return {
    init,
    activateForm
  }
};
