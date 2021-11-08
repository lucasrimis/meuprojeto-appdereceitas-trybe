import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  // const [searchValue, setSearchValue] = useState('');

  const renderSearch = () => (
    <div>
      <input type="text" placeholder="Search" data-testid="search-input" />
      <div>
        <label htmlFor="ing">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ing"
            name="search"
            value="ingredient"
            // onClick={ ({ target }) => setSearchValue(target.value) }
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
            // onClick={ ({ target }) => setSearchValue(target.value) }
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
            // onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Primeira Letra
        </label>
      </div>
      <div>
        <button type="button" data-testid="exec-search-btn">Buscar</button>
      </div>
    </div>
  );

  const renderHeader = () => {
    const pathname = window.location.pathname.split('');
    const seila = pathname.shift();
    console.log(seila);
    return (
      <h1>
        { pathname.join('').charAt(0).toUpperCase() + pathname.join('').slice(1) }
      </h1>
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

        { renderHeader() }

        <button type="button" onClick={ () => setSearchClick(!searchClick) }>
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      </div>
      {searchClick && renderSearch()}
    </header>
  );
}

export default Header;
