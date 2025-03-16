import { describe, test, it, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests in <CounterApp />', () => {
  const initialValue = 100;

  it('should match with snapshot', () => {
    const { container } = render( <CounterApp value={ initialValue } /> );
    expect( container ).toMatchSnapshot();
  });

  test('initial value should be 100', () => { 
    render( <CounterApp value={ initialValue } /> );
    expect( screen.getByText(initialValue) ).toBeTruthy();
  });

  it('should increment with +1 button', () => { 
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByTestId('btn-add') );
    expect( screen.getByText(initialValue + 1)).toBeTruthy();
  });

  it('should decrement with -1 button', () => { 
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByTestId('btn-substract') );
    expect( screen.getByText(initialValue - 1)).toBeTruthy();
  });

  it('should reset with reset button', () => { 
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByTestId('btn-add') );
    fireEvent.click( screen.getByTestId('btn-add') );
    fireEvent.click( screen.getByTestId('btn-add') );
    fireEvent.click( screen.getByTestId('btn-reset') );
    expect( screen.getByText(initialValue) ).toBeTruthy();
  });
});
