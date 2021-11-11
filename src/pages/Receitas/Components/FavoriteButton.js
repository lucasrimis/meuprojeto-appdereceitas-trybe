import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import handleFavoritesClick from './handleFavoritesClick';

export default function FavoriteButton({ detail, redHeart, heart, type }) {
  const [isfavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!getFavorites) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favorites);
    if (type === 'comida') {
      favorites
        .filter((favorite) => (
          favorite.id === detail.idMeal ? setIsFavorite(true)
            : setIsFavorite(false)));
    }
    if (type === 'bebida') {
      favorites
        .filter((favorite) => (
          favorite.id === detail.idDrink ? setIsFavorite(true)
            : setIsFavorite(false)));
    }
    console.log(isfavorite);
  }, [detail, type, isfavorite]);

  return (
    <div>
      <button type="button" onClick={ () => handleFavoritesClick(type, detail) }>
        <img src={ isfavorite ? redHeart : heart } alt="" data-testid="favorite-btn" />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  detail: PropTypes.shape(PropTypes.any).isRequired,
  redHeart: PropTypes.string.isRequired,
  heart: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
