import { SortOrder } from "../../util/SortOrder";

export type TechnologyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  cost?: SortOrder;
  playerLevelRequirement?: SortOrder;
};
