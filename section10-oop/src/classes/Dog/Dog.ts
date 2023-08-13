export class Dog {
  name: String = "";
  breed: String = "";
  hairColor: String = "";
  weight: number = 0;

  constructor(name: String, breed: String, hairColor: String, weight: number) {
    this.name = name;
    this.breed = breed;
    this.hairColor = hairColor;
    this.weight = weight;
  }

  getDescription() {
    console.log(
      `The ${this.name} is ${this.hairColor}, the breed ${this.breed} and weighs ${this.weight}KG.`
    );
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}
