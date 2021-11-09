export const getMealIngredients = (ingrediente) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json());
  return data;
};

export const getMealName = (name) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return data;
};

export const getMealFirstLetter = (letter) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkIngredients = (ingrediente) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkName = (name) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkFirstLetter = (letter) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return data;
};