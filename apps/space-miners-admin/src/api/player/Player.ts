import { JsonValue } from "type-fest";
import { Ship } from "../ship/Ship";
import { Squadron } from "../squadron/Squadron";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  level: number | null;
  name: string | null;
  experience: number | null;
  currency: number | null;
  items: JsonValue;
  ships?: Array<Ship>;
  squadrons?: Array<Squadron>;
};
