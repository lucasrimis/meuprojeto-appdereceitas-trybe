import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Comidas() {
  const { setPageName, setShowButton, food } = useContext(MyContext);

  useEffect(() => {
    setPageName('Comidas');
  }, [setPageName]);

  useEffect(() => {
    setShowButton(true);
  }, [setShowButton]);

  const renderFoods = () => {
    const MIN_LENGTH = 12;
    return food.map(({ strMeal, strMealThumb, idMeal }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
            <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
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
      { food ? renderFoods() : null }
    </div>
  );
}
