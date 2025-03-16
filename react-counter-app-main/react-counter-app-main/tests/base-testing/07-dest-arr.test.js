import { describe, test, expect } from 'vitest';
import { returnArray } from '../../src/base-testing/07-dest-arr';

describe('Tests in 07-dest-arr', () => {

  test('should return a string and a number', () => {
    const [ letters, numbers ] = returnArray();

    expect( letters ).toBeTypeOf( 'string' );
    expect( numbers ).toBeTypeOf( 'number' );
  });
});
