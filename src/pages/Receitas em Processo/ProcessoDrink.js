import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkId } from '../../services/API';
import IngredientesCheckbox from '../Receitas/Components/IngredientesCheckbox';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import FavoriteButton from '../Receitas/Components/FavoriteButton';
import { defaultInProgressRecipes } from '../../services/helpers/inProgressRecipes';

const copy = require('clipboard-copy');

export default function Drink(props) {
  const [drinkDetalhe, setDrinkDetalhe] = useState({});
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const drinkInfo = await getDrinkId(id);
      setDrinkDetalhe(drinkInfo.drinks[0]);
      defaultInProgressRecipes(id, 'drink');
    }
    fetchDetalhe();
  }, [props]);

  const handleClick = () => {
    copy(window.location);
    setCopiado(true);
  };

  return (
    <div>
      <img
        src={ drinkDetalhe.strDrinkThumb }
        width="150px"
        alt="Foto da receita pronta"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{drinkDetalhe.strDrink}</h1>
      <p data-testid="recipe-category">{drinkDetalhe.strCategory}</p>
      <button type="button" onClick={ handleClick }>
        <img src={ shareIcon } alt="" data-testid="share-btn" />
      </button>
      {copiado && <p>Link copiado!</p>}
      <FavoriteButton
        detail={ drinkDetalhe }
        heart={ whiteHeart }
        redHeart={ blackHeart }
        type="bebida"
      />
      <IngredientesCheckbox recipeInfo={ drinkDetalhe } />
      <p data-testid="instructions">{drinkDetalhe.strInstructions}</p>
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
