import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SquadronService } from "./squadron.service";
import { SquadronControllerBase } from "./base/squadron.controller.base";

@swagger.ApiTags("squadrons")
@common.Controller("squadrons")
export class SquadronController extends SquadronControllerBase {
  constructor(protected readonly service: SquadronService) {
    super(service);
  }
}
