import * as graphql from "@nestjs/graphql";
import { TechnologyResolverBase } from "./base/technology.resolver.base";
import { Technology } from "./base/Technology";
import { TechnologyService } from "./technology.service";

@graphql.Resolver(() => Technology)
export class TechnologyResolver extends TechnologyResolverBase {
  constructor(protected readonly service: TechnologyService) {
    super(service);
  }
}
