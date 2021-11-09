import React, { useEffect, useState } from 'react';
import { getDrinkCategories } from '../../../services/API';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState([]);
  const MIN_CATEGORIES = 0;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getDrinkCategories();
      setDrinkCategories(categories.drinks.slice(MIN_CATEGORIES, MAX_CATEGORIES));
    };
    fetchCategories();
  }, [setDrinkCategories]);

  return (
    <div>
      { drinkCategories
        .map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>)) }
    </div>
  );
}
