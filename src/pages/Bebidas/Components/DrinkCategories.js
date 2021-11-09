import React, { useEffect, useState, useContext } from 'react';
import { getDrinkCategories, getDrinkFilter, getDrinkName } from '../../../services/API';
import MyContext from '../../../Context';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState([]);
  const { setDrink } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
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
    if (loading === false) {
      const data = await getDrinkFilter(name);
      setDrink(data.drinks);
      setLoading(true);
    } else {
      const data = await getDrinkName('');
      setDrink(data.drinks);
      setLoading(false);
    }
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
            onClick={ handleClick }
          >
            {strCategory}
          </button>)) }
    </div>
  );
}
