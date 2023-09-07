import { make } from '@nx-with-functional-languages/utils/rescript';

export function makeOnce() {
  return make({ count: 1 });
}
