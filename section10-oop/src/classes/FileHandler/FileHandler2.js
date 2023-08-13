"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler2 = void 0;
var Reader_1 = require("./Reader");
var Writer_1 = require("./Writer");
//Composition example
var FileHandler2 = /** @class */ (function () {
    function FileHandler2() {
        this.content = "";
        this.reader = new Reader_1.Reader;
        this.writer = new Writer_1.Writer;
    }
    return FileHandler2;
}());
exports.FileHandler2 = FileHandler2;
