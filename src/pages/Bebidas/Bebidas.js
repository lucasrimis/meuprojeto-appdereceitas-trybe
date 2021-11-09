import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDrinkName } from '../../services/API';
import DrinkCategories from './Components/DrinkCategories';

export default function Bebidas() {
  const { setPageName, setShowButton, drink, setDrink } = useContext(MyContext);

  useEffect(() => {
    setPageName('Bebidas');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    getDrinkName('').then((response) => {
      setDrink(response.drinks);
    });
  }, [setDrink]);

  const renderDrinks = () => {
    const MIN_LENGTH = 12;
    return drink.map(({ strDrink, strDrinkThumb, idDrink }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <div key={ idDrink } data-testid={ `${index}-recipe-card` }>
            <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
              width="150px"
            />
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <Header />
      <DrinkCategories />
      { drink ? renderDrinks() : null }
      <Footer />
    </div>
  );
}
