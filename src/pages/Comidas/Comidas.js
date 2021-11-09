import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealIngredients } from '../../services/API';

export default function Comidas() {
  const { setPageName, setShowButton, food, setFood } = useContext(MyContext);

  useEffect(() => {
    setPageName('Comidas');
  }, [setPageName]);

  useEffect(() => {
    setShowButton(true);
  }, [setShowButton]);

  useEffect(() => {
    async function fetchMeals() {
      const test = 'Onion';
      const mealsInfo = await getMealIngredients(test);
      setFood(mealsInfo.meals);
      console.log(mealsInfo);
    }
    fetchMeals();
  }, [setFood]);

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
      <Footer />
    </div>
  );
}
