import React from 'react';
import { Link } from 'react-router-dom';

export default function FinishBtn() {
  return (
    <Link to="/receitas-feitas">
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled
      >
        Finalizar Receita
      </button>
    </Link>
  );
}
