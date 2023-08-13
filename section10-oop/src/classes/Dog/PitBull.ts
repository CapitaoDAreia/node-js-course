import { Dog } from "./Dog";

export class PitBull extends Dog {
  fitDetail: String = "";
  constructor(
    name: String,
    breed: String,
    hairColor: String,
    weight: number,
    fit: String
  ) {
    super(name, breed, hairColor, weight);
    this.fitDetail = fit;
  }

  getOutFit() {
    console.log(`${this.name} wears a ${this.fitDetail}`);
  }
}
