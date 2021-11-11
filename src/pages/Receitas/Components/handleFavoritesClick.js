export default function handleFavoritesClick(type, detail) {
  const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(getFavorites);
  if (type === 'comida') {
    const favorite = {
      id: detail.idMeal,
      type,
      area: detail.strArea,
      category: detail.strCategory,
      alcoholicOrNot: detail.strAlcorolic ? detail.strAlcorolic : 'Not Alcoholic',
      name: detail.strMeal,
      image: detail.strMealThumb,
    };
    localStorage.setItem('favoriteRecipes', JSON.stringify([...getFavorites, favorite]));
  }
  if (type === 'bebida') {
    const favorite = {
      id: detail.idDrink,
      type,
      area: detail.strArea,
      category: detail.strCategory,
      alcoholicOrNot: detail.strAlcorolic ? detail.strAlcorolic : 'Not Alcoholic',
      name: detail.strDrink,
      image: detail.sttDrinkThumb,
    };
    localStorage.setItem('favoriteRecipes', JSON.stringify([...getFavorites, favorite]));
  }
  console.log(detail);
}
