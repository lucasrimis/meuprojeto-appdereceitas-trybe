const FAVORITE_RECIPES = 'favoriteRecipes';

if (!JSON.parse(localStorage.getItem(FAVORITE_RECIPES))) {
  localStorage.setItem(FAVORITE_RECIPES, JSON.stringify([]));
}
const readFavoriteRecipes = () => JSON.parse(localStorage.getItem(FAVORITE_RECIPES));

const saveFavoriteRecipes = (favoriteRecipes) => localStorage
  .setItem(FAVORITE_RECIPES, JSON.stringify(favoriteRecipes));

export const getFavoriteRecipes = () => {
  const favoriteRecipes = readFavoriteRecipes();
  return favoriteRecipes;
};

export const addRecipe = (recipe) => {
  if (recipe) {
    const favoriteRecipes = readFavoriteRecipes();
    saveFavoriteRecipes([...favoriteRecipes, recipe]);
  }
};

export const removeRecipe = (recipe, type) => {
  const favoriteRecipes = readFavoriteRecipes();
  if (type === 'comida') {
    saveFavoriteRecipes(favoriteRecipes.filter((favRecipe) => favRecipe.id
    !== recipe.idMeal));
  }
  if (type === 'bebida') {
    saveFavoriteRecipes(favoriteRecipes.filter((favRecipe) => favRecipe.id
    !== recipe.idDrink));
  }
};
