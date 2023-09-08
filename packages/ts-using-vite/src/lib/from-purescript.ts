import {
  animals,
  human,
  main,
  alien,
  darkness,
  Species,
} from '@nx-with-functional-languages/utils/purescript';

export const animalList = animals;

export const genAlien = (alienSelection: 1 | 2 | 3): Species => {
  switch (alienSelection) {
    case 1:
      return human;
    case 2:
      return alien;
    case 3:
      return alien;
  }
};

export function tests(): void {
  const nothing = darkness();

  main();
}
