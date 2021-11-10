import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../Context';

export default function StartBtn(props) {
  const { path } = props;
  const { click, setClick } = useContext(MyContext);
  return (
    <Link to={ path }>
      <button
        className="startBtn"
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => setClick(!click) }
      >
        {click ? 'Continuar Receita' : 'Começar Receita'}
      </button>
    </Link>
  );
}

StartBtn.propTypes = {
  path: PropTypes.string.isRequired,
};
