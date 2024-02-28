interface Player {
  play: () => Promise<void>;
  stop: () => Promise<void>;
}
interface AudioControl {
  getVolume: () => number;
  increaseVolume: () => Promise<number>;
  decreaseVolume: () => Promise<number>;
}
export { AudioControl, Player };
