"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitBull = void 0;
var Dog_1 = require("./Dog");
var PitBull = /** @class */ (function (_super) {
    __extends(PitBull, _super);
    function PitBull(name, breed, hairColor, weight, fit) {
        var _this = _super.call(this, name, breed, hairColor, weight) || this;
        _this.fitDetail = "";
        _this.fitDetail = fit;
        return _this;
    }
    PitBull.prototype.getOutFit = function () {
        console.log("".concat(this.name, " wears a ").concat(this.fitDetail));
    };
    return PitBull;
}(Dog_1.Dog));
exports.PitBull = PitBull;
