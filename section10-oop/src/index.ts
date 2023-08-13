import { Film } from "./classes/Film/Film";
import { PitBull } from "./classes/Dog/PitBull";
import { FileHandler } from "./classes/FileHandler/FileHandler";
import { FileHandler2 } from "./classes/FileHandler/FileHandler2";
import { Reader } from "./classes/FileHandler/Reader";
import { Writer } from "./classes/FileHandler/Writer";

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

/*
    ---------------- DOG EXAMPLE - INHERITANCE ----------------
*/
console.log("\n\n---------------- DOG EXAMPLE ----------------");
const Pacoca = new PitBull("Paçoca", "PitBull", "Black", 60, "Blue Outfit");
Pacoca.bark();
Pacoca.getDescription();
Pacoca.getOutFit();

/*
    ---------------- FILE HANDLER EXAMPLE - INJECTION ----------------
*/
console.log("\n\n---------------- FILE HANDLER - INJECTION ----------------");
const reader = new Reader();
const writer = new Writer();
const FHandler = new FileHandler(reader, writer);

FHandler.writer.setFile("./imagine_a_file");
FHandler.writer.action("Content to write");

/*
    ---------------- FILE HANDLER EXAMPLE - COMPOSITION ----------------
*/
console.log("\n\n---------------- FILE HANDLER - COMPOSITION ----------------");
const FHandler2 = new FileHandler2();
FHandler2.writer.setFile("./imagine_a_file_2");
FHandler2.reader.action();
