import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/colorReducer';

const ColorPickerReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  const handleClick = ({ target }) => {
    dispatch({
      type: target.id
    });
  };

  return (
    <>
      <button 
        id="UNDO" onClick={handleClick}>undo</button>
      <button 
        id="REDO" onClick={handleClick}>redo</button>
      <input 
        id="RECORD"
        alt="input"
        type="color"
        value={state.current}
        onChange={handleChange}
      />
      <div 
        data-testid="color"
        style={{ 
          backgroundColor: state.current, 
          width: '10rem', 
          height: '10rem' }}></div>
    </>
  );
};

export default ColorPickerReducer;
