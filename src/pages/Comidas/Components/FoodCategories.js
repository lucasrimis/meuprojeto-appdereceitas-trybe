import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../../Context';
import { getFoodCategories, getFoodFilter, getMealName } from '../../../services/API';

export default function FoodCategories() {
  const { setFood } = useContext(MyContext);
  const [foodCategories, setFoodCategories] = useState([]);
  const [loading, setLoading] = useState(false);
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
    if (loading === false) {
      const filteredCategory = await getFoodFilter(name);
      setFood(filteredCategory.meals);
      setLoading(true);
    } else {
      const data = await getMealName('');
      setFood(data.meals);
      setLoading(false);
    }
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
