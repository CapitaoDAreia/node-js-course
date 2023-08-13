"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
var Reader = /** @class */ (function () {
    function Reader() {
        this.fileName = "";
    }
    Reader.prototype.action = function () {
        console.log("Reading ".concat(this.fileName, "..."));
    };
    Reader.prototype.setFile = function (fileName) { };
    return Reader;
}());
exports.Reader = Reader;
