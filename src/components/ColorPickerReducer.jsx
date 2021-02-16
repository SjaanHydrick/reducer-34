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

  console.log(state.current);

  return (
    <>
      {/* <button onClick={state.before}>undo</button>
      <button onClick={state.after}>redo</button> */}
      <input 
        id="COLOR_CHANGE"
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
