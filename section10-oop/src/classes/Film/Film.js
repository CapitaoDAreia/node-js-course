"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Film = void 0;
var Film = /** @class */ (function () {
    function Film(title, date, genre, director, actors, duration) {
        this.title = "";
        this.date = new Date();
        this.genre = "";
        this.director = "";
        this.actors = [""];
        this.duration = 0;
        this.isPlayed = false;
        this.isPlaying = false;
        this.timesPlayed = 0;
        this.title = title;
        this.date = date;
        this.genre = genre;
        this.director = director;
        this.actors = actors;
        this.duration = duration;
    }
    Film.prototype.reprod = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.isPlayed = true;
            this.timesPlayed++;
        }
        console.log("".concat(this.title, ": is started to play..."));
    };
    Film.prototype.pause = function () {
        this.isPlaying = false;
        console.log("".concat(this.title, ": is paused..."));
    };
    Film.prototype.forward = function () {
        console.log("".concat(this.title, ": is jumping to the next scene..."));
    };
    Film.prototype.close = function () {
        this.isPlaying = false;
        console.log("".concat(this.title, ": is closed..."));
    };
    Film.prototype.getInfo = function () {
        console.log("----------- INFO ABOUT: ".concat(this.title, " -----------"));
        console.table([
            {
                title: this.title,
                date: this.date,
                genre: this.genre,
                director: this.director,
                actors: this.actors,
                duration: this.duration,
            },
        ]);
    };
    Film.prototype.getIsPlaying = function () {
        if (this.isPlaying) {
            console.log("".concat(this.title, " is playing."));
        }
    };
    Film.prototype.getIsPlayed = function () {
        if (this.isPlayed) {
            console.log("".concat(this.title, " has been played at least ").concat(this.timesPlayed, " times."));
        }
    };
    return Film;
}());
exports.Film = Film;
