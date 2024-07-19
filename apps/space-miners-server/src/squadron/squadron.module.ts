import { Module } from "@nestjs/common";
import { SquadronModuleBase } from "./base/squadron.module.base";
import { SquadronService } from "./squadron.service";
import { SquadronController } from "./squadron.controller";
import { SquadronResolver } from "./squadron.resolver";

@Module({
  imports: [SquadronModuleBase],
  controllers: [SquadronController],
  providers: [SquadronService, SquadronResolver],
  exports: [SquadronService],
})
export class SquadronModule {}
