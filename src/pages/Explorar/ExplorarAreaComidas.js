import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function ExplorarAreaComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Explorar Origem');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
    </div>
  );
}
