export class Device {
  deviceId: string;
  description: string;

  deserialise(input): this {
    Object.assign(this, input);
    return this;
  }

}
