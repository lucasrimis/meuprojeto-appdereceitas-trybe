import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FinishBtn from './FinishBtn';

export default function IngredientesCheckbox({ recipeInfo }) {
  const keys = Object.keys(recipeInfo).filter((i) => i.includes('Ingredient'));
  const ingredientes = keys.filter((key) => recipeInfo[key] !== null
    && recipeInfo[key] !== '');
  const [checkeds, setCheckeds] = useState(0);

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
              className="inputCheck"
              onChange={
                () => setCheckeds(document.querySelectorAll('.inputCheck:checked').length)
              }
            />
            <label htmlFor="ingredientCheck" className="labelCheck">
              {' '}
              {recipeInfo[key]}
              {' - '}
              {recipeInfo[`strMeasure${index + 1}`]}

            </label>
            <br />
          </div>
        )) }
      </ul>
      <FinishBtn checkeds={ checkeds } />
    </div>
  );
}

IngredientesCheckbox.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
