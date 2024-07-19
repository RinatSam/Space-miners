/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Squadron as PrismaSquadron,
  Player as PrismaPlayer,
} from "@prisma/client";

export class SquadronServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SquadronCountArgs, "select">): Promise<number> {
    return this.prisma.squadron.count(args);
  }

  async squadrons(
    args: Prisma.SquadronFindManyArgs
  ): Promise<PrismaSquadron[]> {
    return this.prisma.squadron.findMany(args);
  }
  async squadron(
    args: Prisma.SquadronFindUniqueArgs
  ): Promise<PrismaSquadron | null> {
    return this.prisma.squadron.findUnique(args);
  }
  async createSquadron(
    args: Prisma.SquadronCreateArgs
  ): Promise<PrismaSquadron> {
    return this.prisma.squadron.create(args);
  }
  async updateSquadron(
    args: Prisma.SquadronUpdateArgs
  ): Promise<PrismaSquadron> {
    return this.prisma.squadron.update(args);
  }
  async deleteSquadron(
    args: Prisma.SquadronDeleteArgs
  ): Promise<PrismaSquadron> {
    return this.prisma.squadron.delete(args);
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.squadron
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
