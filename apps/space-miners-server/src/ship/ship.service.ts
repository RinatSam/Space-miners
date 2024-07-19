import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipServiceBase } from "./base/ship.service.base";

@Injectable()
export class ShipService extends ShipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
