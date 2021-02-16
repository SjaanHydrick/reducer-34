import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('changes the color', async() => {
    render(<ColorPicker />);

    const display = await screen.findByTestId('color');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });
});
