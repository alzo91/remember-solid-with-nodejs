import { Video } from "./video-abstract";

export class PlayMovie extends Video {
  async calculateTime(): Promise<void> {
    console.log("Calculate timer is not implemented yet");
  }
  async play(): Promise<void> {
    console.log("Play is not implemented yet");
  }
}

export class TVShow extends Video {
  async calculateTime(): Promise<void> {
    console.log("Calculate timer is not implemented yet");
  }
  async play(): Promise<void> {
    console.log("Play is not implemented yet");
  }
}
