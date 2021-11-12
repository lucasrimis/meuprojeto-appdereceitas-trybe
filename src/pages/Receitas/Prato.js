import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealId } from '../../services/API';
import StartBtn from './Components/StartBtn';
import DrinksRecomendados from './Components/DrinksRecomendados';
import Ingredientes from './Components/Ingredientes';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteButton from './Components/FavoriteButton';

const copy = require('clipboard-copy');

export default function Prato(props) {
  const [comidaDetalhe, setComidaDetalhe] = useState({});
  const [url, setUrl] = useState('');
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const comidaInfo = await getMealId(id);
      setComidaDetalhe(comidaInfo.meals[0]);
      const a = comidaInfo.meals[0].strYoutube.replace('/watch?v=', '/embed/');
      setUrl(a);
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
      { copiado ? <p>Link copiado!</p> : null }
      <FavoriteButton
        detail={ comidaDetalhe }
        type="comida"
      />
      <Ingredientes recipeInfo={ comidaDetalhe } />
      <p data-testid="instructions">{comidaDetalhe.strInstructions}</p>
      <h2>Video</h2>
      { url !== '' && <iframe
        title="Video da receita"
        width="560"
        height="315"
        src={ url }
        data-testid="video"
      />}
      <div className="wrapper">
        <DrinksRecomendados />
      </div>
      <StartBtn
        path={ `/comidas/${comidaDetalhe.idMeal}/in-progress` }
        id={ comidaDetalhe.idMeal }
      />
    </div>
  );
}

Prato.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
