import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  level?: SortOrder;
  name?: SortOrder;
  experience?: SortOrder;
  currency?: SortOrder;
  items?: SortOrder;
};
