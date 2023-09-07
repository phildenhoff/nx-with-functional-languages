import { nice, sum } from './from-civet';

describe('sum', () => {
  it('must sum two numbers', () => {
    expect(sum).toBeInstanceOf(Function);
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('nice', () => {
  it('must return the word nice', () => {
    expect(nice()).toEqual('nice');
  });
});
