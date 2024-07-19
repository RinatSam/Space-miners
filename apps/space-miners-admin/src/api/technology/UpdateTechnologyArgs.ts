import { TechnologyWhereUniqueInput } from "./TechnologyWhereUniqueInput";
import { TechnologyUpdateInput } from "./TechnologyUpdateInput";

export type UpdateTechnologyArgs = {
  where: TechnologyWhereUniqueInput;
  data: TechnologyUpdateInput;
};
