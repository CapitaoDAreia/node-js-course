"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Film_1 = require("./classes/Film/Film");
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
console.log("\n\n");
