import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientesCheckbox({ recipeInfo }) {
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
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <input
              type="checkbox"
              id="ingredientCheck"
            />
            <label htmlFor="ingredientCheck">
              {' '}
              {recipeInfo[key]}
              {' - '}
              {recipeInfo[`strMeasure${index + 1}`]}

            </label>
            <br />
          </div>
        )) }
      </ul>
    </div>
  );
}

IngredientesCheckbox.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
