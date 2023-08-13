"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Film_1 = require("./classes/Film/Film");
var PitBull_1 = require("./classes/Dog/PitBull");
var FileHandler_1 = require("./classes/FileHandler/FileHandler");
var FileHandler2_1 = require("./classes/FileHandler/FileHandler2");
var Reader_1 = require("./classes/FileHandler/Reader");
var Writer_1 = require("./classes/FileHandler/Writer");
/*
    ---------------- FILM EXAMPLE ----------------
*/
console.log("\n\n---------------- FILM EXAMPLE ----------------");
var FastAndFurious = new Film_1.Film("The Fast and the Furious", new Date(), "Adventure", "Rob Cohen", ["Paul Walker", "Vin Diesel"], 120);
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
var Pacoca = new PitBull_1.PitBull("Paçoca", "PitBull", "Black", 60, "Blue Outfit");
Pacoca.bark();
Pacoca.getDescription();
Pacoca.getOutFit();
/*
    ---------------- FILE HANDLER EXAMPLE - INJECTION ----------------
*/
console.log("\n\n---------------- FILE HANDLER - INJECTION ----------------");
var reader = new Reader_1.Reader();
var writer = new Writer_1.Writer();
var FHandler = new FileHandler_1.FileHandler(reader, writer);
FHandler.writer.setFile("./imagine_a_file");
FHandler.writer.action("Content to write");
/*
    ---------------- FILE HANDLER EXAMPLE - COMPOSITION ----------------
*/
console.log("\n\n---------------- FILE HANDLER - COMPOSITION ----------------");
var FHandler2 = new FileHandler2_1.FileHandler2();
FHandler2.writer.setFile("./imagine_a_file_2");
FHandler2.reader.action();
