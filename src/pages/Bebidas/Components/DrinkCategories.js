import React, { useEffect, useState, useContext } from 'react';
import { getDrinkCategories, getDrinkFilter } from '../../../services/API';
import MyContext from '../../../Context';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState([]);
  const { setDrink } = useContext(MyContext);
  const MIN_CATEGORIES = 0;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getDrinkCategories();
      setDrinkCategories(categories.drinks.slice(MIN_CATEGORIES, MAX_CATEGORIES));
    };
    fetchCategories();
  }, [setDrinkCategories]);

  const handleClick = async ({ target: { name } }) => {
    const data = await getDrinkFilter(name);
    setDrink(data.drinks);
  };

  return (
    <div>
      { drinkCategories
        .map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            name={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ (e) => handleClick(e) }
          >
            {strCategory}
          </button>)) }
    </div>
  );
}
