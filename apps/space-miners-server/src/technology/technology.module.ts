import { Module } from "@nestjs/common";
import { TechnologyModuleBase } from "./base/technology.module.base";
import { TechnologyService } from "./technology.service";
import { TechnologyController } from "./technology.controller";
import { TechnologyResolver } from "./technology.resolver";

@Module({
  imports: [TechnologyModuleBase],
  controllers: [TechnologyController],
  providers: [TechnologyService, TechnologyResolver],
  exports: [TechnologyService],
})
export class TechnologyModule {}
