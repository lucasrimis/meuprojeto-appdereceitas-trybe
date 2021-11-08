export const getIngredients = (ingrediente) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json());
  return data;
};

export const getName = (name) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return data;
};

export const getFirstLetter = (letter) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return data;
};
