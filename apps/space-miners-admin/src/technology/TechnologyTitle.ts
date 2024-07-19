import { Technology as TTechnology } from "../api/technology/Technology";

export const TECHNOLOGY_TITLE_FIELD = "name";

export const TechnologyTitle = (record: TTechnology): string => {
  return record.name?.toString() || String(record.id);
};
