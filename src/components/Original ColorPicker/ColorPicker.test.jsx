import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('changes the color', async() => {
    render(<ColorPicker />);

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
    render(<ColorPicker />);

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

  it('changes the color and tests redo button', async() => {
    render(<ColorPicker />);

    const input = screen.getByAltText('input');
    const undo = screen.getByText('undo');
    const redo = screen.getByText('redo');

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
    fireEvent.click(redo);

    const display = screen.getByTestId('color');

    expect(display).toHaveStyle({
      backgroundColor: '#00FF00'
    });
  });
});
