import { Player, MovieType } from "./Abstract-Player";

export class Movie extends Player {
  constructor() {
    super(MovieType.Movie);
  }

  calculateTime(): number {
    const timer = 60000;
    console.log("[Movie extends Player].calculateTime", timer);
    return timer;
  }
  play(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
}
