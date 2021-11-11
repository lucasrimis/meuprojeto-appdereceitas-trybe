import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import handleClick from './handleClick';

export default function StartBtn(props) {
  const [verificar, setVerificar] = useState(false);
  const { path } = props;
  const id = window.location.pathname.split('/')[2];
  const caminho = window.location.pathname;

  useEffect(() => {
    const iniciar = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (iniciar === null) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: {}, cocktails: {} }));
    }
    const a = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (caminho.includes('comidas')) {
      return a.meals[id] ? setVerificar(true) : setVerificar(false);
    }

    if (caminho.includes('bebidas')) {
      return a.cocktails[id] ? setVerificar(true) : setVerificar(false);
    }
  }, [id, caminho]);

  return (
    <Link to={ path }>
      <button
        className="startBtn"
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => handleClick(verificar, caminho, id) }
      >
        {verificar ? 'Continuar Receita' : 'Começar Receita'}
      </button>
    </Link>
  );
}

StartBtn.propTypes = {
  path: PropTypes.string.isRequired,
};
