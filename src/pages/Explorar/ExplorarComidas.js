import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function ExplorarComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Explorar Comidas');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
