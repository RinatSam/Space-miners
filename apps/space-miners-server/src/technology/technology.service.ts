import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TechnologyServiceBase } from "./base/technology.service.base";

@Injectable()
export class TechnologyService extends TechnologyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
