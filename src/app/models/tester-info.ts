export class TesterInfo {
  testerId: string;
  firstName: string;
  lastName: string;
  country: string;
  lastLogin: string;
  bugsByDevice: Map<string, string[]>;
  totalBugsCount: number;

  deserialise(input): this {
    Object.assign(this, input);
    return this;
  }
}
