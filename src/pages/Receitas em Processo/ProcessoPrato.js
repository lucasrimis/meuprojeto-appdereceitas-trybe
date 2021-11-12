import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealId } from '../../services/API';
import IngredientesCheckbox from '../Receitas/Components/IngredientesCheckbox';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';

export default function Prato(props) {
  const [comidaDetalhe, setComidaDetalhe] = useState({});
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const comidaInfo = await getMealId(id);
      setComidaDetalhe(comidaInfo.meals[0]);
    }
    fetchDetalhe();
  }, [props]);

  const handleClick = () => {
    window.navigator.clipboard.writeText(window.location);
    setCopiado(true);
  };

  return (
    <div>
      <img
        src={ comidaDetalhe.strMealThumb }
        width="150px"
        alt="Foto da receita pronta"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{comidaDetalhe.strMeal}</h1>
      <p data-testid="recipe-category">{comidaDetalhe.strCategory}</p>
      <button type="button" onClick={ handleClick }>
        <img src={ shareIcon } alt="" data-testid="share-btn" />
      </button>
      {copiado && <p>Link copiado!</p>}
      <button type="button">
        <img src={ whiteHeart } alt="" data-testid="favorite-btn" />
      </button>
      <IngredientesCheckbox recipeInfo={ comidaDetalhe } />
      <p data-testid="instructions">{comidaDetalhe.strInstructions}</p>
    </div>
  );
}

Prato.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
