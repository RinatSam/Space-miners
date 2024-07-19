import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ShipListRelationFilter } from "../ship/ShipListRelationFilter";
import { SquadronListRelationFilter } from "../squadron/SquadronListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  level?: IntNullableFilter;
  name?: StringNullableFilter;
  experience?: IntNullableFilter;
  currency?: IntNullableFilter;
  items?: JsonFilter;
  ships?: ShipListRelationFilter;
  squadrons?: SquadronListRelationFilter;
};
