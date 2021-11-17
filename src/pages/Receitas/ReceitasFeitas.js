import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDoneRecipes } from '../../services/helpers/doneRecipes';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ReceitasFeitas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageName('Receitas Feitas');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  const handleCopy = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied(true);
  };

  const renderRecipes = () => {
    const getRecipes = getDoneRecipes();
    return getRecipes.map((recipe, index) => (
      <div key={ index }>
        <img
          src={ recipe.image }
          alt={ `Imagem de ${recipe.name}` }
          data-testid={ `${index}-horizontal-image` }
          width="150px"
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${recipe.type === 'comida' ? `${recipe.area} - ` : ''} ${recipe.category}`}
          {' '}
          {`${recipe.type === 'bebida' ? recipe.alcoholicOrNot : ''}`}
        </p>
        <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {recipe.doneDate.split('T')[0]}
        </p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          onClick={ () => handleCopy(recipe.type, recipe.id) }
        >
          <img src={ shareIcon } alt="" />
        </button>
        { copied ? <p>Link copiado!</p> : null }
        <span>
          Tags:
          { recipe.tags.map((tag, i) => (
            <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>)) }
        </span>
        { recipe.type === 'comida' ? <p>{ recipe.area }</p> : null }
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      { renderRecipes() }
    </div>
  );
}
