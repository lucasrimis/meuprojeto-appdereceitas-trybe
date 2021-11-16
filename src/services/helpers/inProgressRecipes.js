const IN_PROGRESS_RECIPES = 'inProgressRecipes';

if (!JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES))) {
  localStorage.setItem(IN_PROGRESS_RECIPES, JSON.stringify([]));
}
const readRecipes = () => JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES));

const saveProgress = (recipes) => localStorage
  .setItem(IN_PROGRESS_RECIPES, JSON.stringify(recipes));

export const getInProgressRecipes = () => {
  const recipes = readRecipes();
  return recipes;
};

export const addRecipe = (recipe) => {
  const recipes = readRecipes();
  saveProgress([...recipes, recipe]);
};

export const removeRecipe = (recipe) => {
  const recipes = readRecipes();
  saveProgress(recipes.filter((inProgressRecipe) => inProgressRecipe.id
    !== recipe.id));
};
