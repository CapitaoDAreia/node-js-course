"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
var Writer = /** @class */ (function () {
    function Writer() {
        this.fileName = "";
    }
    Writer.prototype.action = function (content) {
        console.log("Writing ".concat(content, " in ").concat(this.fileName, "..."));
    };
    Writer.prototype.setFile = function (fileName) {
        if (fileName) {
            this.fileName = fileName;
        }
        else {
            throw new Error("filename must exist");
        }
    };
    return Writer;
}());
exports.Writer = Writer;
