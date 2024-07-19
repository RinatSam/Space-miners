import { Player } from "../player/Player";

export type Ship = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  speed: number | null;
  cargoCapacity: number | null;
  power: number | null;
  name: string | null;
  player?: Player | null;
};
