import { Currency } from '@nx-with-functional-languages/utils/civet';
import { nice, sum, nameOfNumber, Money } from './from-civet';

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

describe('Money', () => {
  it('must sum two Money of the same currency', () => {
    const one = Money.new(1, Currency.CAD);
    const two = Money.new(2, Currency.CAD);

    expect(Money.sum([one, two])).toEqual(Money.new(3, Currency.CAD));
  });
  it('must throw an error when summing different currencies', () => {
    const one = Money.new(1, Currency.CAD);
    const two = Money.new(2, Currency.USD);

    expect(() => Money.sum([one, two])).toThrowError();
  });
});
