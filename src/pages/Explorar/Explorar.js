import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Explorar() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Explorar');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
      <Link to="/explorar/comidas">
        <button data-testid="explore-food" type="button">Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks" type="button">Explorar Bebidas</button>
      </Link>
      <Footer />
    </div>
  );
}
