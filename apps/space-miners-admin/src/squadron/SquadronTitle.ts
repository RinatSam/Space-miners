import { Squadron as TSquadron } from "../api/squadron/Squadron";

export const SQUADRON_TITLE_FIELD = "name";

export const SquadronTitle = (record: TSquadron): string => {
  return record.name?.toString() || String(record.id);
};
