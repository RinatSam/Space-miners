import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  typeField?: "Option1";
  reward?: IntNullableFilter;
};
