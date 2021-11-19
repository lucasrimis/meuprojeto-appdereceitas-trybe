import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealName } from '../../services/API';
import FoodCategories from './Components/FoodCategories';
import Foods from './Components/Foods';

export default function Comidas() {
  const { setPageName, setShowButton, food, setFood } = useContext(MyContext);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setPageName('Comidas');
  }, [setPageName]);

  useEffect(() => {
    setShowButton(true);
  }, [setShowButton]);

  useEffect(() => {
    async function fetchMeals() {
      const mealsInfo = await getMealName('');
      if (food.length === 0) {
        setFood(mealsInfo.meals);
      }
    }
    fetchMeals();
  }, [setFood, food]);

  useEffect(() => {
    const UM_SEGUNDO = 1000;
    setTimeout(() => {
      setLoad(true);
    }, UM_SEGUNDO);
  }, []);

  if (!load) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <FoodCategories />
      <div className="recipeCardsDiv">
        { food ? <Foods food={ food } /> : null }
      </div>
      <Footer />
    </div>
  );
}
