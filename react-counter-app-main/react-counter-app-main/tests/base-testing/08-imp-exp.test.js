import { describe, test, expect } from 'vitest';
import { getHeroById, getHeroesByOwner } from '../../src/base-testing/08-imp-exp';
import heroes from '../../src/base-testing/data/heroes';

describe('Tests in 08-imp-exp', () => {

  test('getHeroById should return a hero by ID', () => {
    const id = 1;
    const hero = getHeroById( id );
    
    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getHeroById should return a undefined if ID does not exist', () => {
    const id = 777;
    const hero = getHeroById( id );
    
    expect( hero ).toBeUndefined()
  });

  test('getHeroesByOwner should return an array with DC heroes', () => {
    const owner = 'DC';
    const testDCHeroes = getHeroesByOwner(owner);

    expect( testDCHeroes.length ).toBe( 3 );
    expect( testDCHeroes ).toEqual( heroes.filter( (hero) => hero.owner === owner ) );
  });

  test('getHeroesByOwner should return an array with Marvel heroes', () => { 
    const owner = 'Marvel';
    const testMarvelHeroes = getHeroesByOwner(owner);

    expect( testMarvelHeroes.length ).toBe( 2 );
    expect( testMarvelHeroes ).toEqual( heroes.filter( (hero) => hero.owner === owner ) );
  });
});
