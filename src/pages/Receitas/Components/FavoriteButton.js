import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import handleFavoritesClick from './handleFavoritesClick';
import { getFavoriteRecipes } from '../../../services/helpers/getFavorites';
import blackHeart from '../../../images/blackHeartIcon.svg';
import whiteHeart from '../../../images/whiteHeartIcon.svg';

export default function FavoriteButton({ detail, type }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoriteRecipes();
    if (type === 'comida') {
      favorites
        .filter((favorite) => (
          favorite.id === detail.idMeal ? setIsFavorite(true)
            : setIsFavorite(false)));
      console.log(isFavorite);
    }
    if (type === 'bebida') {
      favorites
        .filter((favorite) => (
          favorite.id === detail.idDrink ? setIsFavorite(true)
            : setIsFavorite(false)));
    }
  }, [isFavorite, detail, type]);

  // TUDO ACONTECENDO PERFEITAMENTE, PORÉM O BOTÃO NÃO MUDA INSTANTANEAMENTE, SÓ DEPOIS DE CARREGAR A PÁGINA

  return (
    <div>
      <button type="button" onClick={ () => handleFavoritesClick(type, detail) }>
        <img
          src={ isFavorite ? blackHeart : whiteHeart }
          alt="favorite button"
          data-testid="favorite-btn"
        />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  detail: PropTypes.shape(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};
