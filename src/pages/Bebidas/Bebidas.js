import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Bebidas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Bebidas');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
    </div>
  );
}
