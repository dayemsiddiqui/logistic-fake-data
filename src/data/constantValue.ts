import { DataGenerator } from '../DataGenerator';

export class ConstantValue extends DataGenerator {
  datatype = 'constantValue';
  private value: any;
  generate() {
    return this.value;
  }
  configure(value: any): DataGenerator {
    this.value = value;
    return this;
  }
}
