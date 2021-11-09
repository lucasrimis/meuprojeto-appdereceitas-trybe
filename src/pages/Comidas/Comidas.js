import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealName } from '../../services/API';
import FoodCategories from './Components/FoodCategories';
import Foods from './Components/Foods';

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
      const mealsInfo = await getMealName('');
      setFood(mealsInfo.meals);
    }
    fetchMeals();
  }, [setFood]);

  return (
    <div>
      <Header />
      <FoodCategories />
      { food ? <Foods food={ food } /> : null }
      <Footer />
    </div>
  );
}
