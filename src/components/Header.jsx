import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../Context';
import { getIngredients, getName, getFirstLetter } from '../services/API';

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const { pageName, showButton } = useContext(MyContext);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleClick = async () => {
    if (searchValue === 'ingredient') {
      const ingredients = await getIngredients(value);
      console.log(ingredients.meals);
    } else if (searchValue === 'name') {
      const name = await getName(value);
      console.log(name.meals);
    } else if (searchValue === 'first') {
      if (value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const firstLetter = await getFirstLetter(value);
        console.log(firstLetter.meals);
      }
    }
  };

  const renderSearch = () => (
    <div>
      <input
        type="text"
        placeholder="Search"
        data-testid="search-input"
        onChange={ (e) => setValue(e.target.value) }
      />
      <div>
        <label htmlFor="ing">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ing"
            name="search"
            value="ingredient"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name"
            name="search"
            value="name"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Nome
        </label>
        <label htmlFor="first">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first"
            name="search"
            value="first"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Primeira Letra
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </div>
    </div>
  );

  const renderExplore = () => {
    if (!showButton) {
      return null;
    }
    return (
      <button type="button" onClick={ () => setSearchClick(!searchClick) }>
        <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
      </button>
    );
  };

  return (
    <header>
      <div>
        <Link to="/perfil">
          <div>
            <img src={ profileIcon } alt="IconePerfil" data-testid="profile-top-btn" />
          </div>
        </Link>
        <h1 data-testid="page-title">{pageName}</h1>
        { renderExplore() }
      </div>
      {searchClick && renderSearch()}
    </header>
  );
}

export default Header;
