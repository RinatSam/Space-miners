import * as graphql from "@nestjs/graphql";
import { SquadronResolverBase } from "./base/squadron.resolver.base";
import { Squadron } from "./base/Squadron";
import { SquadronService } from "./squadron.service";

@graphql.Resolver(() => Squadron)
export class SquadronResolver extends SquadronResolverBase {
  constructor(protected readonly service: SquadronService) {
    super(service);
  }
}
