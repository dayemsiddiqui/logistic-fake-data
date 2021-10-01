import { DataType, UtilityType } from './data';
import { generateCollection } from './DataGenerator';

export const main = () => {
  const fake = generateCollection(
    {
      email: DataType.email,
      incoterm: DataType.incoterm,
      shipment: {
        id: DataType.shipmentID,
        port: DataType.airport.format('code')
      },
      customerID: DataType.customerID.configure(['C-16926', 'C-4423']),
      userID: UtilityType.constant.configure('U-1'),
      status: UtilityType.pickAny.configure(['OPEN', 'PENDING', 'CLOSED'])
    },
    10
  );

  console.log(fake);
};
