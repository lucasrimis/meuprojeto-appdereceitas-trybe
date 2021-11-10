import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredientes({ recipeInfo }) {
  console.log(recipeInfo);
  const keys = Object.keys(recipeInfo).filter((i) => i.includes('Ingredient'));
  const ingredientes = keys.filter((key) => recipeInfo[key] !== null
    && recipeInfo[key] !== '');

  return (
    <div>
      <h2>Ingredientes</h2>
      { recipeInfo.strAlcoholic
        ? <p data-testid="recipe-category">{recipeInfo.strAlcoholic}</p>
        : null }
      <ul>
        { ingredientes.map((key, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {recipeInfo[key]}
            {' - '}
            {recipeInfo[`strMeasure${index + 1}`]}
          </li>
        )) }
      </ul>
    </div>
  );
}

Ingredientes.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
