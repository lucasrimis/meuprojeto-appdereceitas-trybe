import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FinishBtn from './FinishBtn';
import { addRecipe,
  getInProgressRecipes, removeRecipe } from '../../../services/helpers/inProgressRecipes';

export default function IngredientesCheckbox({ recipeInfo }) {
  const keys = Object.keys(recipeInfo).filter((i) => i.includes('Ingredient'));
  const ingredientes = keys.filter((key) => recipeInfo[key] !== null
    && recipeInfo[key] !== '');
  const [checkeds, setCheckeds] = useState(1);
  const [ingredientesChecked, setIngredientesChecked] = useState(['']);

  const handleChange = ({ target: { name } }) => {
    setCheckeds(document.querySelectorAll('.inputCheck:checked').length);
    const a = ingredientesChecked.some((ingredient) => ingredient === name);
    if (a) {
      let b = ingredientesChecked.filter((ing) => (ing !== name));
      setIngredientesChecked(b);
    } else {
      let b = ingredientesChecked;
      b.push(name);
      setIngredientesChecked(b);
    }
    const recipes = getInProgressRecipes();
    if (window.location.pathname.includes('comidas')) {
      const alreadyInProgress = recipes.meals[recipeInfo.idMeal]
        .some((recipe) => recipe === name);
      if (alreadyInProgress) {
        removeRecipe('meals', name, recipeInfo.idMeal);
      }
      if (!alreadyInProgress) {
        addRecipe('meals', name, recipeInfo.idMeal);
      }
    }
    if (window.location.pathname.includes('bebidas')) {
      const alreadyInProgress = recipes.cocktails[recipeInfo.idDrink]
        .some((recipe) => recipe === name);
      if (alreadyInProgress) {
        removeRecipe('cocktails', name, recipeInfo.idDrink);
      }
      if (!alreadyInProgress) {
        addRecipe('cocktails', name, recipeInfo.idDrink);
      }
    }
  };

  useEffect(() => {
    const recipesInProgress = getInProgressRecipes();
    console.log(recipesInProgress.meals[recipeInfo.idMeal]);
    if (window.location.pathname.includes('comidas')) {
      const arrayOfingredients = recipesInProgress.meals[recipeInfo.idMeal];
      console.log(arrayOfingredients);
      setIngredientesChecked(arrayOfingredients);
    }
    if (window.location.pathname.includes('bebidas')) {
      const arrayOfingredients = recipesInProgress.cocktails[recipeInfo.idDrink];
      setIngredientesChecked(arrayOfingredients);
    }
  }, [recipeInfo]);

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
              name={ recipeInfo[key] }
              className="inputCheck"
              onChange={ handleChange }
              id={ recipeInfo[key] }
              checked={ ingredientesChecked ? ingredientesChecked.some((ingredient) => ingredient === recipeInfo[key]) : false }
            />
            <label htmlFor={ recipeInfo[key] } className="labelCheck">
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
