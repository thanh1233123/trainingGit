import { describe, it, expect } from 'vitest';
import { screen, render} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {
  const title = 'A test title';
  const subTitle = 'A test subtitle';
  
  it('should match with snapshot', () => {
    const { container } = render( <FirstApp title={ title } /> );
    expect( container ).toMatchSnapshot();
  });

  it('should contain title', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getByText(title) ).toBeTruthy();
  });

  it('should show title on h1', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
  });

  it('should contain props subTitle', () => {
    render( 
      <FirstApp 
        title={ title } 
        subTitle={ subTitle }
      /> 
    );
    
    expect( screen.getAllByText(subTitle).length ).toBe( 2 );
  });
});
