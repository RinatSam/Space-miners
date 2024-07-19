import * as graphql from "@nestjs/graphql";
import { ShipResolverBase } from "./base/ship.resolver.base";
import { Ship } from "./base/Ship";
import { ShipService } from "./ship.service";

@graphql.Resolver(() => Ship)
export class ShipResolver extends ShipResolverBase {
  constructor(protected readonly service: ShipService) {
    super(service);
  }
}
