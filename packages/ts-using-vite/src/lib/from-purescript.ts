import {
  animals,
  main,
  mapMaybe,
  alien,
  darkness,
  either,
  Species,
} from '@nx-with-functional-languages/utils/purescript';

export const animalList = animals;

export const genAlien = (alienSelection: 1 | 2 | 3): Species => {
  switch (alienSelection) {
    case 1:
      return {
        __brand: Symbol('Cat'),
      };
    case 2:
      return alien;
    case 3:
      return alien;
  }
};

export function tests(): string {
  const nothing = darkness();

  main();
}
