import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealId } from '../../services/API';
import StartBtn from './Components/StartBtn';
import DrinksRecomendados from './Components/DrinksRecomendados';
import Ingredientes from './Ingredientes';

export default function Prato(props) {
  const [comidaDetalhe, setComidaDetalhe] = useState({});
  const [url, setUrl] = useState('a');

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
      <img src="" alt="" data-testid="share-btn" />
      <img src="" alt="" data-testid="favorite-btn" />
      <Ingredientes recipeInfo={ comidaDetalhe } />
      <p data-testid="instructions">{comidaDetalhe.strInstructions}</p>
      <h2>Video</h2>
      {/* <video
        src={ comidaDetalhe.strYoutube }
        data-testid="video"
        width="320"
        height="240"
        controls
      >
        Your browser does not support the video tag.
      </video> */}
      <iframe
        title="Video da receita"
        width="560"
        height="315"
        src={ url }
        data-testid="video"
      />
      <div className="wrapper">
        <DrinksRecomendados />
      </div>
      <StartBtn path={ `/comidas/${comidaDetalhe.idMeal}/in-progress` } />
    </div>
  );
}

Prato.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
