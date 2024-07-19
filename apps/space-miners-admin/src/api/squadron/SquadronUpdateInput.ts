import { InputJsonValue } from "../../types";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type SquadronUpdateInput = {
  name?: string | null;
  members?: InputJsonValue;
  player?: PlayerWhereUniqueInput | null;
};
