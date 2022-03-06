const RecipeController = () => {
  const init = () => {
    recipe.populateWindow();
    activateForm();
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
    init
  }
};
