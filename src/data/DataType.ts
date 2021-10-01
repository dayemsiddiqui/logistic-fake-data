import { Incoterm } from './incoterm';
import { Email } from './email';
import { ShipmentID } from './shipmentID';
import { Airport } from './airport';
import { CustomerID } from './customerID';
import { UserID } from './userID';

export const DataType = {
  incoterm: new Incoterm(),
  email: new Email(),
  shipmentID: new ShipmentID(),
  airport: new Airport(),
  customerID: new CustomerID(),
  userID: new UserID()
};
