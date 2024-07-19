import { InputJsonValue } from "../../types";
import { ShipCreateNestedManyWithoutPlayersInput } from "./ShipCreateNestedManyWithoutPlayersInput";
import { SquadronCreateNestedManyWithoutPlayersInput } from "./SquadronCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  level?: number | null;
  name?: string | null;
  experience?: number | null;
  currency?: number | null;
  items?: InputJsonValue;
  ships?: ShipCreateNestedManyWithoutPlayersInput;
  squadrons?: SquadronCreateNestedManyWithoutPlayersInput;
};
