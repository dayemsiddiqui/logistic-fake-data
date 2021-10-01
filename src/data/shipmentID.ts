import { DataGenerator } from '../DataGenerator';
import { random } from 'lodash';

export class ShipmentID extends DataGenerator {
  datatype = 'shipmentID';
  generate() {
    const shipmentID = `S${random(1000, 9999, false)}`;
    return shipmentID;
  }
}
