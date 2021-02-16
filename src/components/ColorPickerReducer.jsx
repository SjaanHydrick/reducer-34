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

  console.log(state.current);
  console.log(state.before);
  console.log(state.after);

  return (
    <>
      <button 
        id="UNDO" onClick={handleClick}>undo</button>
      <button 
        id="REDO" onClick={handleClick}>redo</button>
      <input 
        id="RECORD"
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
