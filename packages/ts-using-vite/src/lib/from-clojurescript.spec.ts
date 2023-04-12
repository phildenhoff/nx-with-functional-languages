import { square } from './from-clojurescript';

describe('tests', () => {
  it('should work', () => {
    expect(square(2)).toEqual(4);
  });
});
