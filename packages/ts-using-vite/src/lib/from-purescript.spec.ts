import { animalList } from './from-purescript';

describe('animalList', () => {
  it('must have the right value', () => {
    expect(animalList).toEqual(['cat', 'dog', 'fish']);
  });
});
