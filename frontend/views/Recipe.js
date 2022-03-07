const Recipe = () => {
  const getSearchElement = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Ask me a question...');
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

  const getInfoElement = () => {
    const info = document.createElement('div');
    info.classList.add('recipe-info');
    const title = document.createElement('div');
    title.classList.add('recipe-title');
    //const desc = document.createElement('div');
    //desc.classList.add('recipe-desc');
    const summary = document.createElement('div');
    summary.classList.add('recipe-summary');
    const img = document.createElement('img');
    img.classList.add('recipe-img');
    //desc.appendChild(summary);
    //desc.appendChild(img);
    info.appendChild(title);
    info.appendChild(summary);
    info.appendChild(img);
    //info.appendChild(desc);
    return info;
  };
 
  const getIngredientsElement = () => {
    const ingredients = document.createElement('div');
    ingredients.classList.add('recipe-ingredients');
    const heading = document.createElement('div');
    heading.classList.add('recipe-title');
    heading.innerText = 'Ingredients';
    const list = document.createElement('ul');
    list.classList.add('recipe-list');
    ingredients.appendChild(heading);
    ingredients.appendChild(list);
    return ingredients;
  };

  const getStepsElement = () => {
    const steps = document.createElement('div');
    steps.classList.add('recipe-instructions');
    const heading = document.createElement('div');
    heading.classList.add('recipe-title');
    heading.classList.add('recipe-steps-title');
    heading.innerText = 'Instructions';
    const text = document.createElement('div');
    text.classList.add('recipe-steps');
    steps.appendChild(heading);
    steps.appendChild(text);
    return steps;
  };

  const getRecipeElement = () => {
    const info = getInfoElement();
    const ingredients = getIngredientsElement();
    const steps = getStepsElement();
    const recipe = document.createElement('div');
    recipe.classList.add('recipe');
    recipe.appendChild(info);
    recipe.appendChild(ingredients);
    recipe.appendChild(steps);
    return recipe;
  };

  const getBackButton = () => {
    const back = document.createElement('div');
    back.classList.add('button');
    back.classList.add('back');
    back.innerText = 'Go Back';
    return back;
  };

  const populateWindow = () => {
    clearScreen();
    const form = getFormElement();
    const recipe = getRecipeElement();
    const back = getBackButton();
    container.appendChild(form);
    container.appendChild(recipe);
    container.appendChild(back);
    activateBackBtn();
  };

  const clearList = () => {
    const list = document.querySelector('.recipe-list');
    while (list.firstChild) { 
      list.removeChild(list.lastChild);
    }
  };

  const displayRecipe = (response) => {
    document.querySelector('.recipe-title').innerText = response["title"];
    document.querySelector('.recipe-summary').innerHTML = response["summary"];
    document.querySelector('.recipe-img').setAttribute('src', response['url']);
    document.querySelector('.recipe-steps').innerHTML = response["instructions"];

    const ingredientList = response["ingredients"]
    clearList();
    for (let x of ingredientList) {
      const item = document.createElement('li');
      item.innerText = x;
      document.querySelector('.recipe-list').appendChild(item);
    }
  };

  return {
    populateWindow,
    displayRecipe
  }
};
