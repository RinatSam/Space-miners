import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SquadronServiceBase } from "./base/squadron.service.base";

@Injectable()
export class SquadronService extends SquadronServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
