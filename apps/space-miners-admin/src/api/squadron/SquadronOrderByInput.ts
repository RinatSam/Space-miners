import { SortOrder } from "../../util/SortOrder";

export type SquadronOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  members?: SortOrder;
  playerId?: SortOrder;
};
