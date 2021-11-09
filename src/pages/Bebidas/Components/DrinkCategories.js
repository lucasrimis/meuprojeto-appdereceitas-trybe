import React, { useEffect, useState } from 'react';
import { getDrinkCategories } from '../../../services/API';
import Button from './Button';

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
          <Button key={ strCategory } strCategory={ strCategory } />)) }
    </div>
  );
}
