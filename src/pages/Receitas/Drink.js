import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkId } from '../../services/API';
import StartBtn from './Components/StartBtn';
import ComidasRecomendadas from './Components/ComidasRecomendadas';
import Ingredientes from './Ingredientes';

export default function Drink(props) {
  const [drinkDetalhe, setDrinkDetalhe] = useState({});

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const drinkInfo = await getDrinkId(id);
      setDrinkDetalhe(drinkInfo.drinks[0]);
    }
    fetchDetalhe();
  }, [props]);

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
      <img src="" alt="" data-testid="share-btn" />
      <img src="" alt="" data-testid="favorite-btn" />
      <Ingredientes recipeInfo={ drinkDetalhe } />
      <p data-testid="instructions">{drinkDetalhe.strInstructions}</p>
      <div className="wrapper">
        <ComidasRecomendadas />
      </div>
      <StartBtn path={ `/bebidas/${drinkDetalhe.idDrink}/in-progress` } />
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
