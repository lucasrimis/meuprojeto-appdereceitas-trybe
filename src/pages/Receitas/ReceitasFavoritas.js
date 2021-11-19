import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function ReceitasFavoritas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Favorite Recipes');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
    </div>
  );
}
