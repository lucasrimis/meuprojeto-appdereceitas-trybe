import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import handleFavoritesClick from './handleFavoritesClick';
import { getFavoriteRecipes } from '../../../services/helpers/getFavorites';
import blackHeart from '../../../images/blackHeartIcon.svg';
import whiteHeart from '../../../images/whiteHeartIcon.svg';
import MyContext from '../../../Context';

export default function FavoriteButton({ detail, type }) {
  const { isFavorite, setIsFavorite } = useContext(MyContext);

  useEffect(() => {
    const favorites = getFavoriteRecipes();
    if (type === 'comida') {
      favorites
        .forEach((favorite) => (
          favorite.id === detail.idMeal ? setIsFavorite(true)
            : setIsFavorite(false)));
    }
    if (type === 'bebida') {
      favorites
        .forEach((favorite) => (
          favorite.id === detail.idDrink ? setIsFavorite(true)
            : setIsFavorite(false)));
    }
  }, [detail, type, setIsFavorite]);

  return (
    <div>
      <button
        type="button"
        onClick={ () => handleFavoritesClick(type, detail, setIsFavorite) }
      >
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
