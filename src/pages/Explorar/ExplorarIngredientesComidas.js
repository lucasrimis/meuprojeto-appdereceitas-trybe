import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealIngredientList, getMealIngredients } from '../../services/API';

export default function ExplorarIngredientesComidas() {
  const { setPageName, setShowButton, setFood } = useContext(MyContext);
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

  async function fetchMealsByIngredient(ingredient) {
    const mealsByIngredient = await getMealIngredients(ingredient);
    setFood(mealsByIngredient.meals);
  }

  function renderIngredientList() {
    const MIN_LENGTH = 12;
    return ingredientList.map(({ strIngredient, idIngredient }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <Link to="/comidas">
            <div
              key={ idIngredient }
              data-testid={ `${index}-ingredient-card` }
            >
              <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>

              <button
                type="button"
                onClick={ async () => {
                  await fetchMealsByIngredient(strIngredient);
                } }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                  alt={ strIngredient }
                  width="150px"
                />
              </button>
            </div>
          </Link>
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
