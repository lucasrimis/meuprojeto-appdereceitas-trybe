import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function StartBtn(props) {
  const { path } = props;
  return (
    <Link to={ path }>
      <button
        className="startBtn"
        data-testid="start-recipe-btn"
        type="button"
      >
        Começar receita
      </button>
    </Link>
  );
}

StartBtn.propTypes = {
  path: PropTypes.string.isRequired,
};
