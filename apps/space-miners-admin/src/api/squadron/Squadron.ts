import { JsonValue } from "type-fest";
import { Player } from "../player/Player";

export type Squadron = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  members: JsonValue;
  player?: Player | null;
};
