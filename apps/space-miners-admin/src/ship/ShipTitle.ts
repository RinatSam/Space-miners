import { Ship as TShip } from "../api/ship/Ship";

export const SHIP_TITLE_FIELD = "name";

export const ShipTitle = (record: TShip): string => {
  return record.name?.toString() || String(record.id);
};
