"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = void 0;
//Injection example
var FileHandler = /** @class */ (function () {
    function FileHandler(reader, writer) {
        this.content = "";
        this.reader = reader;
        this.writer = writer;
    }
    return FileHandler;
}());
exports.FileHandler = FileHandler;
