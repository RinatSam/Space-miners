import { SortOrder } from "../../util/SortOrder";

export type ShipOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  speed?: SortOrder;
  cargoCapacity?: SortOrder;
  power?: SortOrder;
  name?: SortOrder;
  playerId?: SortOrder;
};
