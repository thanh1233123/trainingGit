import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => setCounter( counter + 1 );
  const handleSubstract = () => setCounter( counter - 1 );
  const handleReset = () => setCounter( value );
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd } data-testid="btn-add"> +1 </button>
      <button onClick={ handleSubstract } data-testid="btn-substract"> -1 </button>
      <button onClick={ handleReset } data-testid="btn-reset"> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}