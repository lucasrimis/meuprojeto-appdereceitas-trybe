import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function ExplorarAreaComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Explore Origin');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
