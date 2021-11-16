const IN_PROGRESS_RECIPES = 'inProgressRecipes';

if (!JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES))) {
  localStorage.setItem('inProgressRecipes', JSON
    .stringify({ meals: {}, cocktails: {} }));
}
const readRecipes = () => JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES));

const saveProgress = (recipes) => localStorage
  .setItem(IN_PROGRESS_RECIPES, JSON.stringify(recipes));

export const getInProgressRecipes = () => {
  const recipes = readRecipes();
  return recipes;
};

export const addRecipe = (recipeType, ingredient, id) => {
  const recipes = readRecipes();
  const teste = {
    ...recipes,
    [recipeType]: {
      ...recipes[recipeType],
      [id]: [...(recipes[recipeType][id] || []), ingredient],
    },
  };
  saveProgress(teste);
};

export const removeRecipe = (recipeType, ingredient, id) => {
  const recipes = readRecipes();
  const teste = recipes[recipeType][id].filter((recipe) => recipe !== ingredient);
  const newInProgressRecipes = {
    ...recipes,
    [recipeType]: {
      ...recipes[recipeType],
      [id]: teste,
    },
  };
  saveProgress(newInProgressRecipes);
};
