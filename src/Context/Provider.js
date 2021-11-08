import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const [pageName, setPageName] = useState('');
  const [showButton, setShowButton] = useState(true);

  const contextValue = {
    pageName,
    setPageName,
    showButton,
    setShowButton,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
