import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type ShipUpdateInput = {
  speed?: number | null;
  cargoCapacity?: number | null;
  power?: number | null;
  name?: string | null;
  player?: PlayerWhereUniqueInput | null;
};
