import { getRandomElementFromArray } from '../utils/getRandomElementFromArray';
import { DataGenerator } from '../DataGenerator';

export class Incoterm extends DataGenerator {
  private data: string[] = ['FOB', 'EXW', 'CIP', 'FCA', 'DAP', 'DPU'];
  datatype = 'incoterm';
  generate() {
    return getRandomElementFromArray(this.data);
  }
}
