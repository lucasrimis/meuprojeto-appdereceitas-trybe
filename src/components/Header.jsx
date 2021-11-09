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
import Search from './Header Components/Search';
import Explore from './Header Components/Explore';

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const { pageName, showButton, setFood, setDrink } = useContext(MyContext);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('ingredient');
  const semReceitas = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

  const noFoodRecipes = (busca) => {
    if (!busca) {
      return global
        .alert(semReceitas);
    } if (busca.length === 1) {
      window.location.href = `/comidas/${busca[0].idMeal}`;
    }
    setFood(busca);
  };

  const noDrinkRecipes = (busca) => {
    if (!busca) {
      return global
        .alert(semReceitas);
    } if (busca.length === 1) {
      window.location.href = `/bebidas/${busca[0].idDrink}`;
    }
    setDrink(busca);
  };

  const getFood = async () => {
    if (searchValue === 'ingredient') {
      const ingredients = await getMealIngredients(value);
      noFoodRecipes(ingredients.meals);
    } else if (searchValue === 'name') {
      const name = await getMealName(value);
      noFoodRecipes(name.meals);
    } else if (searchValue === 'first') {
      if (value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const firstLetter = await getMealFirstLetter(value);
        noFoodRecipes(firstLetter.meals);
      }
    }
  };

  const getDrink = async () => {
    if (searchValue === 'ingredient') {
      const ingredients = await getDrinkIngredients(value);
      noDrinkRecipes(ingredients.drinks);
    } else if (searchValue === 'name') {
      const name = await getDrinkName(value);
      noDrinkRecipes(name.drinks);
    } else if (searchValue === 'first') {
      if (value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const firstLetter = await getDrinkFirstLetter(value);
        noDrinkRecipes(firstLetter.drinks);
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
        <Explore
          showButton={ showButton }
          searchIcon={ searchIcon }
          searchClick={ searchClick }
          setSearchClick={ setSearchClick }
        />
      </div>
      {searchClick
      && <Search
        handleClick={ handleClick }
        setSearchValue={ setSearchValue }
        setValue={ setValue }
      />}
    </header>
  );
}

export default Header;
