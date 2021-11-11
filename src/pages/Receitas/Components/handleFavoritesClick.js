import { addRecipe, getFavoriteRecipes, removeRecipe }
  from '../../../services/helpers/getFavorites';

export default function handleFavoritesClick(type, detail) {
  const favoriteMeal = {
    id: detail.idMeal,
    type,
    area: detail.strArea,
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcorolic ? detail.strAlcorolic : '',
    name: detail.strMeal,
    image: detail.strMealThumb,
  };
  const favoriteDrink = {
    id: detail.idDrink,
    type,
    area: detail.strArea ? detail.strArea : '',
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcoholic ? detail.strAlcoholic : '',
    name: detail.strDrink,
    image: detail.strDrinkThumb,
  };

  const getRecipes = getFavoriteRecipes();
  const alreadyFavorite = getRecipes.some((recipe) => recipe.id === favoriteMeal.id);

  if (alreadyFavorite) {
    removeRecipe(favoriteMeal);
  }
  if (!alreadyFavorite) {
    if (type === 'comida') {
      addRecipe(favoriteMeal);
    }
    if (type === 'bebida') {
      addRecipe(favoriteDrink);
    }
  }
}
