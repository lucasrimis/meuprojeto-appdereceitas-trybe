import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function FinishBtn(props) {
  const { checkeds } = props;
  const enableBtn = () => {
    const checks = document.querySelectorAll('.inputCheck').length;
    if (checks === checkeds) {
      console.log(false);
      console.log(checkeds);
      return false;
    }
    console.log(checkeds);
    console.log(true);
    return true;
  };

  return (
    <div>
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ enableBtn() }
          className="finishBtn"
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

FinishBtn.propTypes = {
  checkeds: PropTypes.number.isRequired,
};
