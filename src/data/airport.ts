import { DataGenerator } from '../DataGenerator';
import { getRandomElementFromArray } from '../utils/getRandomElementFromArray';

export class Airport extends DataGenerator {
  datatype: string = 'airport';
  private data = [
    {
      name: 'London Heathrow Airport',
      code: 'LHR'
    },
    {
      name: 'London City Airport',
      code: 'LCY'
    },
    {
      name: 'London Gatwick Airport',
      code: 'LCW'
    }
  ];
  private formatType: 'code' | 'name' = 'code';
  generate() {
    return getRandomElementFromArray(this.data)[this.formatType];
  }

  format(type: 'code' | 'name') {
    this.formatType = type;
    return this;
  }
}
