import React, { useEffect, useState } from 'react';
import { getFoodCategories } from '../../../services/API';
import Button from './Button';

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
        <Button key={ strCategory } strCategory={ strCategory } />)) }
    </div>
  );
}
