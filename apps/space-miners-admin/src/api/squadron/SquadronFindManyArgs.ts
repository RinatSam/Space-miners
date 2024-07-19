import { SquadronWhereInput } from "./SquadronWhereInput";
import { SquadronOrderByInput } from "./SquadronOrderByInput";

export type SquadronFindManyArgs = {
  where?: SquadronWhereInput;
  orderBy?: Array<SquadronOrderByInput>;
  skip?: number;
  take?: number;
};
