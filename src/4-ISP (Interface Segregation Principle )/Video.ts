import { Player, AudioControl } from "./interface";

export class Video implements Player, AudioControl {
  async play(): Promise<void> {
    throw new Error("Play hasn't implemented yet");
  }
  async stop(): Promise<void> {
    throw new Error("Play hasn't implemented yet");
  }
  getVolume(): number {
    throw new Error("getVolume hasn't implemented yet");
  }
  async increaseVolume(): Promise<number> {
    throw new Error("getVolume hasn't implemented yet");
  }

  async decreaseVolume(): Promise<number> {
    throw new Error("getVolume hasn't implemented yet");
  }
}
