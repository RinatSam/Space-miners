import { InputJsonValue } from "../../types";
import { ShipUpdateManyWithoutPlayersInput } from "./ShipUpdateManyWithoutPlayersInput";
import { SquadronUpdateManyWithoutPlayersInput } from "./SquadronUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  level?: number | null;
  name?: string | null;
  experience?: number | null;
  currency?: number | null;
  items?: InputJsonValue;
  ships?: ShipUpdateManyWithoutPlayersInput;
  squadrons?: SquadronUpdateManyWithoutPlayersInput;
};
