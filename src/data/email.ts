import { getRandomElementFromArray } from '../utils/getRandomElementFromArray';
import { DataGenerator } from '../DataGenerator';

export class Email extends DataGenerator {
  private username: string[] = [
    'test',
    'example',
    'sailor',
    'john',
    'jane',
    'bob',
    'alice'
  ];

  datatype = 'email';

  private emailService: string[] = [
    'gmail.com',
    'example.com',
    'forto.com',
    'freightlab.io',
    'yahoo.com',
    'msn.com',
    'hotmail.com',
    'outlook.com'
  ];

  generate() {
    const user = getRandomElementFromArray(this.username);
    const service = getRandomElementFromArray(this.emailService);
    return `${user}@${service}`;
  }
}
