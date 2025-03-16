import { describe, test, expect } from 'vitest';
import { getImage } from '../../src/base-testing/11-async-await';

describe('Pruebas en 11-async-await', () => {

  test('getimage should return an image url', async () => {
    const url = await getImage();
    console.log( url );

    expect( url ).toBeTypeOf( 'string' );
  });
});
