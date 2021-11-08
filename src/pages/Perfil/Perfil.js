import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import MyContext from '../../Context';

export default function Perfil() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Perfil');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
    </div>
  );
}
