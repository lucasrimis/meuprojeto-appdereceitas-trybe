import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Comidas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Comidas');
  }, [setPageName]);

  useEffect(() => {
    setShowButton(true);
  }, [setShowButton]);

  return (
    <div>
      <Header />
    </div>
  );
}
