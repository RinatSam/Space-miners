import { ShipWhereInput } from "./ShipWhereInput";
import { ShipOrderByInput } from "./ShipOrderByInput";

export type ShipFindManyArgs = {
  where?: ShipWhereInput;
  orderBy?: Array<ShipOrderByInput>;
  skip?: number;
  take?: number;
};
