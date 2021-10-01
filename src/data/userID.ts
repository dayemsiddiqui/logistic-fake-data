import { DataGenerator } from '../DataGenerator';
import { random } from 'lodash';

export class UserID extends DataGenerator {
  datatype = 'userID';
  generate() {
    const userID = `U-${random(1000, 9999, false)}`;
    return userID;
  }
}
