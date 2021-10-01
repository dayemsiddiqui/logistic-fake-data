import { DataGenerator } from '../DataGenerator';
import { getRandomElementFromArray } from '../utils/getRandomElementFromArray';

export class PickAny extends DataGenerator {
  datatype = 'pickAny';
  private value: any[] = [];
  generate() {
    return getRandomElementFromArray(this.value);
  }
  configure(value: any[]): DataGenerator {
    this.value = value;
    return this;
  }
}
