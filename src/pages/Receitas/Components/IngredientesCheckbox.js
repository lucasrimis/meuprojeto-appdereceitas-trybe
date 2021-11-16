import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FinishBtn from './FinishBtn';
import { defaultInProgressRecipes,
  getInProgressRecipes } from '../../../services/helpers/inProgressRecipes';
import IngredientsCheckboxes
  from '../../Receitas em Processo/components/IngredientsCheckboxes';

export default function IngredientesCheckbox({ recipeInfo }) {
  const keys = Object.keys(recipeInfo).filter((i) => i.includes('Ingredient'));
  const ingredientes = keys.filter((key) => recipeInfo[key] !== null
    && recipeInfo[key] !== '');
  const [checkeds, setCheckeds] = useState(1);
  const [ingredientesChecked, setIngredientesChecked] = useState(['']);
  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (window.location.pathname.includes('comidas')) {
      defaultInProgressRecipes(id, 'meals');
      const recipesInProgress = getInProgressRecipes();
      const arrayOfingredients = recipesInProgress.meals[id];
      setIngredientesChecked(arrayOfingredients);
    }
    if (window.location.pathname.includes('bebidas')) {
      defaultInProgressRecipes(id, 'drink');
      const recipesInProgress = getInProgressRecipes();
      const arrayOfingredients = recipesInProgress.cocktails[id];
      setIngredientesChecked(arrayOfingredients);
    }
  }, [id]);

  return (
    <div>
      <h2>Ingredientes</h2>
      { recipeInfo.strAlcoholic
        ? <p data-testid="recipe-category">{recipeInfo.strAlcoholic}</p>
        : null }
      <ul>
        { ingredientes.map((key, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            <IngredientsCheckboxes
              setIngredientesChecked={ setIngredientesChecked }
              setCheckeds={ setCheckeds }
              ingredientesChecked={ ingredientesChecked }
              recipeInfo={ recipeInfo }
              name={ recipeInfo[key] }
            />
            <label htmlFor={ recipeInfo[key] } className="labelCheck">
              {' '}
              {recipeInfo[key]}
              {' - '}
              {recipeInfo[`strMeasure${index + 1}`]}

            </label>
            <br />
          </li>
        )) }
      </ul>
      <FinishBtn checkeds={ checkeds } />
    </div>
  );
}

IngredientesCheckbox.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
