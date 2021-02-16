import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorPickerReducer from './ColorPickerReducer';

describe('ColorPicker container', () => {
  it('changes the color', async() => {
    render(<ColorPickerReducer />);

    const input = screen.getByAltText('input');

    fireEvent.change(input, {
      target: {
        value: '#FF0000'
      }
    });

    const display = screen.getByTestId('color');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });

  it('changes the color and tests undo button', async() => {
    render(<ColorPickerReducer />);

    const input = screen.getByAltText('input');
    const undo = screen.getByText('undo');

    fireEvent.change(input, {
      target: {
        value: '#FF0000'
      }
    });

    fireEvent.change(input, {
      target: {
        value: '#00FF00'
      }
    });

    fireEvent.click(undo);

    const display = screen.getByTestId('color');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });
});
