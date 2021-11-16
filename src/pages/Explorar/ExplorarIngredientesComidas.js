import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealIngredientList } from '../../services/API';
import IngredientCards from './Components/IngredientCards';

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

  return (
    <div>
      <Header />
      { ingredientList ? <IngredientCards ingredientList={ ingredientList } /> : null }
      <Footer />
    </div>
  );
}
