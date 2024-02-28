export enum MovieType {
  unselected = -1,
  Movie = 0,
  TVShow = 1,
  Film = 2,
  Video = 3,
}
export abstract class Player {
  _type: MovieType = MovieType.unselected;
  constructor(type: MovieType) {
    this._type = type;
    console.log("Liskov.Player", this._type);
  }
  abstract calculateTime(): number;
  abstract play(): void;
  abstract stop(): void;
}
