import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TechnologyService } from "./technology.service";
import { TechnologyControllerBase } from "./base/technology.controller.base";

@swagger.ApiTags("technologies")
@common.Controller("technologies")
export class TechnologyController extends TechnologyControllerBase {
  constructor(protected readonly service: TechnologyService) {
    super(service);
  }
}
