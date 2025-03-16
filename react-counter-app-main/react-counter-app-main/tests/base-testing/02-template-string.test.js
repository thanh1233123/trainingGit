import { describe, test, expect } from 'vitest';
import { getGreeting } from '../../src/base-testing/02-template-string'

describe('Tests in 02-template-string', () => {

  test('getGreeting should return "Hello Fernando"', () => { 
    const name = "Fernando"
    const message = getGreeting(name)

    expect( message ).toBe(`Hello ${ name }`)
  })
 })