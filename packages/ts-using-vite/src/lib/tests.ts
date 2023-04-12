import { make } from '@nx-with-functional-languages/utils/rescript';

export function tests(): string {
  return make({ count: 1 });
}
