import { Module } from "@nestjs/common";
import { ShipModuleBase } from "./base/ship.module.base";
import { ShipService } from "./ship.service";
import { ShipController } from "./ship.controller";
import { ShipResolver } from "./ship.resolver";

@Module({
  imports: [ShipModuleBase],
  controllers: [ShipController],
  providers: [ShipService, ShipResolver],
  exports: [ShipService],
})
export class ShipModule {}
