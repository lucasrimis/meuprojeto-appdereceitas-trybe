import React, { useEffect, useState } from 'react';
import { getFoodCategories } from '../../../services/API';

export default function FoodCategories() {
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

  return (
    <div>
      { foodCategories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ strCategory }
        >
          { strCategory }
        </button>
      )) }
    </div>
  );
}
