import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealIngredientList } from '../../services/API';

export default function ExplorarIngredientesComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    setPageName('Explorar Ingredientes');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    async function fetchIngredientList() {
      const listOfIngredients = await getMealIngredientList();
      setIngredientList(listOfIngredients.meals);
      console.log(typeof listOfIngredients.meals[0].strIngredient);
    }
    fetchIngredientList();
  }, []);

  function renderIngredientList() {
    const MIN_LENGTH = 12;
    return ingredientList.map(({ strIngredient, idIngredient }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <div
            key={ idIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              alt={ strIngredient }
              width="150px"
            />
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div>
      <Header />
      { renderIngredientList() }
      <Footer />
    </div>
  );
}
