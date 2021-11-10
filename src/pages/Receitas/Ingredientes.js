import React from 'react';

export default function Ingredientes() {
  return (
    <div>
      <h2>Ingredientes</h2>
      <ul>
        <li data-testid={ `${0}-ingredient-name-and-measure` }>ingrediente</li>
      </ul>
    </div>
  );
}
