import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../Context';
import {
  getDrinkFirstLetter,
  getDrinkName,
  getDrinkIngredients,
  getMealFirstLetter,
  getMealName,
  getMealIngredients,
} from '../services/API';

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const { pageName, showButton, setFood, setDrink } = useContext(MyContext);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('ingredient');

  const getFood = async () => {
    if (searchValue === 'ingredient') {
      const ingredients = await getMealIngredients(value);
      setFood(ingredients.meals);
      if (!ingredients.meals) {
        return global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      if (ingredients.meals.length === 1) {
        window.location.href = `/comidas/${ingredients.meals[0].idMeal}`;
      }
    } else if (searchValue === 'name') {
      const name = await getMealName(value);
      setFood(name.meals);
      if (name.meals.length === 1) {
        window.location.href = `/comidas/${name.meals[0].idMeal}`;
      }
    } else if (searchValue === 'first') {
      if (value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const firstLetter = await getMealFirstLetter(value);
        setFood(firstLetter.meals);
        if (firstLetter.meals.length === 1) {
          window.location.href = `/comidas/${firstLetter.meals[0].idMeal}`;
        }
      }
    }
  };

  const getDrink = async () => {
    if (searchValue === 'ingredient') {
      const ingredients = await getDrinkIngredients(value);
      setDrink(ingredients.drinks);
      if (!ingredients.drinks) {
        return global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      if (ingredients.drinks.length === 1) {
        window.location.href = `/bebidas/${ingredients.drinks[0].idDrink}`;
      }
    } else if (searchValue === 'name') {
      const name = await getDrinkName(value);
      setDrink(name.drinks);
      if (name.drinks.length === 1) {
        window.location.href = `/bebidas/${name.drinks[0].idDrink}`;
      }
    } else if (searchValue === 'first') {
      if (value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const firstLetter = await getDrinkFirstLetter(value);
        setDrink(firstLetter.drinks);
        if (firstLetter.drinks.length === 1) {
          window.location.href = `/bebidas/${firstLetter.drinks[0].idDrink}`;
        }
      }
    }
  };

  const handleClick = async () => {
    if (window.location.pathname === '/comidas') {
      await getFood();
    } else if (window.location.pathname === '/bebidas') {
      await getDrink();
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
