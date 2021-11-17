import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDrinkIngredientList } from '../../services/API';

export default function ExplorarIngredientesBebidas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    setPageName('Explorar Ingredientes');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    async function fetchIngredientList() {
      const listOfIngredients = await getDrinkIngredientList();
      setIngredientList(listOfIngredients.drinks);
      console.log(listOfIngredients.drinks);
    }
    fetchIngredientList();
  }, []);

  function renderIngredientList() {
    const MIN_LENGTH = 12;
    return ingredientList.map(({ strIngredient1 }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <div
            key={ strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
          >
            <p data-testid={ `${index}-card-name` }>{ strIngredient1 }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              alt={ strIngredient1 }
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
      {renderIngredientList()}
      <Footer />
    </div>
  );
}
