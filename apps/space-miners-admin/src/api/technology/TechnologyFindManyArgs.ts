import { TechnologyWhereInput } from "./TechnologyWhereInput";
import { TechnologyOrderByInput } from "./TechnologyOrderByInput";

export type TechnologyFindManyArgs = {
  where?: TechnologyWhereInput;
  orderBy?: Array<TechnologyOrderByInput>;
  skip?: number;
  take?: number;
};
