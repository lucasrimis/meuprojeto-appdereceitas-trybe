import { addRecipe, getFavoriteRecipes } from '../../../services/helpers/getFavorites';

export default function handleFavoritesClick(type, detail) {
  const getFavorites = getFavoriteRecipes();
  const favorite = {
    id: detail.idMeal,
    type,
    area: detail.strArea,
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcorolic ? detail.strAlcorolic : 'Not Alcoholic',
    name: detail.strMeal,
    image: detail.strMealThumb,
  };
  if (type === 'comida') {
    addRecipe(favorite);
  }
  if (type === 'bebida') {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...getFavorites, favorite]));
  }
}
