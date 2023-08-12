interface FilmInterface {
  title: String;
}

export class Film {
  private title: String = "";
  private date: Date = new Date();
  private genre: String = "";
  private director: String = "";
  private actors: String[] = [""];
  private duration: Number = 0;

  private isPlayed: Boolean = false;
  private isPlaying: Boolean = false;
  private timesPlayed: number = 0;

  constructor(
    title: String,
    date: Date,
    genre: String,
    director: String,
    actors: String[],
    duration: Number
  ) {
    this.title = title;
    this.date = date;
    this.genre = genre;
    this.director = director;
    this.actors = actors;
    this.duration = duration;
  }

  reprod(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.isPlayed = true;
      this.timesPlayed++;
    }

    console.log(`${this.title}: is started to play...`);
  }

  pause(): void {
    this.isPlaying = false;
    console.log(`${this.title}: is paused...`);
  }

  forward(): void {
    console.log(`${this.title}: is jumping to the next scene...`);
  }

  close(): void {
    this.isPlaying = false;
    console.log(`${this.title}: is closed...`);
  }

  getInfo(): void {
    console.log(`----------- INFO ABOUT: ${this.title} -----------`);
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
  }

  getIsPlaying(): void {
    if (this.isPlaying) {
      console.log(`${this.title} is playing.`);
    }
  }

  getIsPlayed(): void {
    if (this.isPlayed) {
      console.log(
        `${this.title} has been played at least ${this.timesPlayed} times.`
      );
    }
  }
}
