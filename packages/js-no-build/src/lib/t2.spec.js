import { makeOnce } from './t2';
describe('makeOnce', () => {
  it('must return `once`', () => {
    expect(makeOnce()).toEqual('once');
  });
});
