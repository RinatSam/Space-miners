import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type SquadronWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  members?: JsonFilter;
  player?: PlayerWhereUniqueInput;
};
