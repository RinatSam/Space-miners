import { InputJsonValue } from "../../types";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type SquadronCreateInput = {
  name?: string | null;
  members?: InputJsonValue;
  player?: PlayerWhereUniqueInput | null;
};
