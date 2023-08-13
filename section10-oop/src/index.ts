import { Film } from "./classes/Film/Film";
import { PitBull } from "./classes/Dog/PitBull";

/*
    ---------------- FILM EXAMPLE ----------------
*/
console.log("\n\n---------------- FILM EXAMPLE ----------------");
const FastAndFurious = new Film(
  "The Fast and the Furious",
  new Date(),
  "Adventure",
  "Rob Cohen",
  ["Paul Walker", "Vin Diesel"],
  120
);
FastAndFurious.reprod();
FastAndFurious.getIsPlayed();
FastAndFurious.reprod();
FastAndFurious.pause();
FastAndFurious.reprod();
FastAndFurious.getIsPlayed();

FastAndFurious.getInfo();
console.log("\n\n");

/*
    ---------------- DOG EXAMPLE - INHERITANCE ----------------
*/
console.log("\n\n---------------- DOG EXAMPLE ----------------");
const Pacoca = new PitBull("Paçoca", "PitBull", "Black", 60, "Blue Outfit");
Pacoca.bark();
Pacoca.getDescription();
Pacoca.getOutFit();
