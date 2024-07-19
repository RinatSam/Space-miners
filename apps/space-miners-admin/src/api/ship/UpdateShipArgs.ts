import { ShipWhereUniqueInput } from "./ShipWhereUniqueInput";
import { ShipUpdateInput } from "./ShipUpdateInput";

export type UpdateShipArgs = {
  where: ShipWhereUniqueInput;
  data: ShipUpdateInput;
};
