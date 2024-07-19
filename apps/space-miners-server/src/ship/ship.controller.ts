import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipService } from "./ship.service";
import { ShipControllerBase } from "./base/ship.controller.base";

@swagger.ApiTags("ships")
@common.Controller("ships")
export class ShipController extends ShipControllerBase {
  constructor(protected readonly service: ShipService) {
    super(service);
  }
}
