import { Movie } from "./Movie";

export class TVShow extends Movie {
  constructor() {
    super();
  }
  calculateTime(): number {
    console.log(`Tvshow extends Movie`);
    return 2000;
  }
}
