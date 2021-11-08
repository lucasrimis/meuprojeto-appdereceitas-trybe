import React, { useContext, useEffect } from 'react';
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
    </div>
  );
}
