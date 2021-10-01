export abstract class DataGenerator {
  public abstract generate(): any;
  public abstract datatype: string;
  public format(...params: any): DataGenerator {
    return this;
  }
  public configure(...params: any): DataGenerator {
    return this;
  }
}

export interface FakeDataModel {
  [key: string]: any;
}

export const generateRecord = (model: FakeDataModel) => {
  const row: { [key: string]: any } = {};
  Object.entries(model).map(([key, value]) => {
    if (value.generate) {
      row[key] = value.generate();
    } else {
      row[key] = generateRecord(value);
    }
  });
  return row;
};

export const generateCollection = (model: FakeDataModel, count = 1) => {
  const collection = [];
  for (let i = 0; i < count; i++) {
    collection.push(generateRecord(model));
  }
  return collection;
};
