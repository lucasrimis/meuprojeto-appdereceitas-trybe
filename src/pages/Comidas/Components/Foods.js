import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Recipes.css';

export default function Foods({ food }) {
  const MIN_LENGTH = 12;
  return food.map(({ strMeal, strMealThumb, idMeal }, index) => {
    if (index < MIN_LENGTH) {
      return (
        <Link to={ `/comidas/${idMeal}` }>
          <div
            key={ idMeal }
            data-testid={ `${index}-recipe-card` }
            className="recipeCards"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
              width="150px"
            />
            <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
          </div>
        </Link>
      );
    }
    return null;
  });
}
