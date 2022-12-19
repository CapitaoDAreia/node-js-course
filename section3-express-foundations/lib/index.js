"use strict";
var express = require("express"); //import express
var app = express(); //instance express to an app const
app.listen(4000, function (error) {
    if (error) {
        console.log('Error: ', error);
    }
    else {
        console.log('Success!');
    }
});
