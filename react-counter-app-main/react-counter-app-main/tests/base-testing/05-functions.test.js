import { describe, test, expect } from 'vitest';
import { getActiveUser, getUser } from '../../src/base-testing/05-functions';

describe('Tests in 05-functions', () => { 

  test('getUser should return an object', () => { 
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect( testUser ).toEqual( user );
  });

  test('getActiveUser should return an object', () => { 
    const name = 'Juan';
    const testActiveUser = {
      uid: 'ABC567',
      username: name
    };
    
    const activeUser = getActiveUser(name);

    expect( testActiveUser ).toEqual( activeUser );
  });
});