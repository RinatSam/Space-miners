import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResourceWhereInput = {
  id?: StringFilter;
  value?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  typeField?: "Option1";
  name?: StringNullableFilter;
};
