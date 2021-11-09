import React, { useEffect, useState } from 'react';
import { getMealId } from '../../services/API';

export default function Prato(props) {
  const [comidaDetalhe, setComidaDetalhe] = useState({});

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const comidaInfo = await getMealId(id);
      setComidaDetalhe(comidaInfo.meals[0]);
      console.log(comidaInfo);
    }
    fetchDetalhe();
  }, [props]);

  return (
    <div>
      <img src="" alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{comidaDetalhe.strMeal}</h1>
      <p data-testid="recipe-category">{comidaDetalhe.strCategory}</p>
      <img src="" alt="" data-testid="share-btn" />
      <img src="" alt="" data-testid="favorite-btn" />
      <p data-testid={ `${0}-ingredient-name-and-measure` }>ingredientes</p>
      <p data-testid="instructions">Instruções</p>
      <h2>Ingredientes</h2>
    </div>
  );
}
