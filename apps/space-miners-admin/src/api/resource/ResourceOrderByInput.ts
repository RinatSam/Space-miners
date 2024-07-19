import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
  quantity?: SortOrder;
  typeField?: SortOrder;
  name?: SortOrder;
};
