import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../../Context';
import { getFoodCategories, getFoodFilter } from '../../../services/API';

export default function FoodCategories() {
  const { setFood } = useContext(MyContext);
  const [foodCategories, setFoodCategories] = useState([]);
  const MIN_CATEGORIES = 0;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getFoodCategories();
      setFoodCategories(categories.meals.slice(MIN_CATEGORIES, MAX_CATEGORIES));
    };
    fetchCategories();
  }, [setFoodCategories]);

  const handleClick = async ({ target: { name } }) => {
    console.log(name);
    const filteredCategory = await getFoodFilter(name);
    console.log(filteredCategory.meals);
    setFood(filteredCategory.meals);
  };

  return (
    <div>
      { foodCategories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ strCategory }
          name={ strCategory }
          onClick={ handleClick }
        >
          { strCategory }
        </button>
      )) }
    </div>
  );
}
