import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type ShipWhereInput = {
  id?: StringFilter;
  speed?: IntNullableFilter;
  cargoCapacity?: IntNullableFilter;
  power?: IntNullableFilter;
  name?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
};
