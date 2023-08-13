"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, breed, hairColor, weight) {
        this.name = "";
        this.breed = "";
        this.hairColor = "";
        this.weight = 0;
        this.name = name;
        this.breed = breed;
        this.hairColor = hairColor;
        this.weight = weight;
    }
    Dog.prototype.getDescription = function () {
        console.log("The ".concat(this.name, " is ").concat(this.hairColor, ", the breed ").concat(this.breed, " and weighs ").concat(this.weight, "KG."));
    };
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    return Dog;
}());
exports.Dog = Dog;
