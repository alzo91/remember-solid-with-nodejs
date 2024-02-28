import { Player } from "./interface";
export class Video implements Player {
  async play(): Promise<void> {
    throw new Error("Play hasn't implemented yet");
  }
  async stop(): Promise<void> {
    throw new Error("Play hasn't implemented yet");
  }
}
