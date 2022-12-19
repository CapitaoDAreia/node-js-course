"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //import express
var app = (0, express_1.default)(); //instance express to an app const
var port = 4000;
app.get("/", function (_req, res) {
    res.send('Você está na root'); //define get route response
});
app.get('/contact', function (_req, res) {
    res.send("Você está na Contact Page");
});
app.get('/about', function (_req, res) {
    res.send("Você está na About Page");
});
app.listen(port, function () {
    console.log("App is running on ".concat(port, " "));
});
