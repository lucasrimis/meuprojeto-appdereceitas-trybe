import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Bebidas() {
  const { setPageName, setShowButton, drink } = useContext(MyContext);

  useEffect(() => {
    setPageName('Bebidas');
    setShowButton(true);
  }, [setPageName, setShowButton]);

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
      { drink ? renderDrinks() : null }
    </div>
  );
}
