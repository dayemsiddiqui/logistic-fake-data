import { sample } from 'lodash';
import assert from 'assert';

export const getRandomElementFromArray = <T>(arr: T[]): T => {
  assert(arr.length > 0, 'Cannot get random element from empty array');
  return sample(arr) as T;
};
