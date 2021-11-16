import React from 'react';
// import { Link } from 'react-router-dom';

export default function IngredientCards({ ingredientList }) {
  const MIN_LENGTH = 12;
  return ingredientList.map(({ strIngredient, idIngredient }, index) => {
    if (index < MIN_LENGTH) {
      return (
        <div
          key={ idIngredient }
          data-testid={ `${index}-ingredient-card` }
        >
          <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            alt={ strIngredient }
            width="150px"
          />
        </div>
      );
    }
    return null;
  });
}
