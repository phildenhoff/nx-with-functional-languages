import { Foobaz, nice } from './from-scalajs';

describe('Foobaz', () => {
  it('must create a Foobaz instance', () => {
    const foobaz = new Foobaz('Maker');
    expect(foobaz).toBeInstanceOf(Foobaz);
    expect(foobaz.suffixer(' of things')).toEqual('Maker of things');
  });
});

describe('nice', () => {
  it('must add an exclamation mark', () => {
    expect(nice('Boat')).toEqual('Boat!');
  });
});
