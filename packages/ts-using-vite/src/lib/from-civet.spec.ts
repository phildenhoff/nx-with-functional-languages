import { nice, sum, nameOfNumber } from './from-civet';

describe('sum', () => {
  it('must sum two numbers', () => {
    expect(sum).toBeInstanceOf(Function);
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('nameOfNumber', () => {
  it('must return the name of a number', () => {
    expect(nameOfNumber).toBeInstanceOf(Function);
    expect(nameOfNumber(1)).toEqual('one');
  });
});

describe('nice', () => {
  it('must return the word nice', () => {
    expect(nice()).toEqual('nice');
  });
});
