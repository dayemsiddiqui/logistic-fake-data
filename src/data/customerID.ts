import { DataGenerator } from '../DataGenerator';
import { random } from 'lodash';
import { getRandomElementFromArray } from '../utils/getRandomElementFromArray';

export class CustomerID extends DataGenerator {
  datatype = 'customerID';
  private userDefinedIDs: string[] | undefined;
  generate() {
    if (this.userDefinedIDs) {
      return getRandomElementFromArray(this.userDefinedIDs);
    }
    const customerID = `C-${random(1000, 9999, false)}`;
    return customerID;
  }
  configure(customerIDs: string[]): DataGenerator {
    this.userDefinedIDs = customerIDs;
    return this;
  }
}
