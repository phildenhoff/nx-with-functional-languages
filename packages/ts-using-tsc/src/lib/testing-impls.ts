import { CounterMessage } from '@nx-with-functional-languages/utils/rescript';

export function testingImpls(): string {
  return CounterMessage.make(1);
}
