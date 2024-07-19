/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Squadron } from "./Squadron";
import { SquadronCountArgs } from "./SquadronCountArgs";
import { SquadronFindManyArgs } from "./SquadronFindManyArgs";
import { SquadronFindUniqueArgs } from "./SquadronFindUniqueArgs";
import { CreateSquadronArgs } from "./CreateSquadronArgs";
import { UpdateSquadronArgs } from "./UpdateSquadronArgs";
import { DeleteSquadronArgs } from "./DeleteSquadronArgs";
import { Player } from "../../player/base/Player";
import { SquadronService } from "../squadron.service";
@graphql.Resolver(() => Squadron)
export class SquadronResolverBase {
  constructor(protected readonly service: SquadronService) {}

  async _squadronsMeta(
    @graphql.Args() args: SquadronCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Squadron])
  async squadrons(
    @graphql.Args() args: SquadronFindManyArgs
  ): Promise<Squadron[]> {
    return this.service.squadrons(args);
  }

  @graphql.Query(() => Squadron, { nullable: true })
  async squadron(
    @graphql.Args() args: SquadronFindUniqueArgs
  ): Promise<Squadron | null> {
    const result = await this.service.squadron(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Squadron)
  async createSquadron(
    @graphql.Args() args: CreateSquadronArgs
  ): Promise<Squadron> {
    return await this.service.createSquadron({
      ...args,
      data: {
        ...args.data,

        player: args.data.player
          ? {
              connect: args.data.player,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Squadron)
  async updateSquadron(
    @graphql.Args() args: UpdateSquadronArgs
  ): Promise<Squadron | null> {
    try {
      return await this.service.updateSquadron({
        ...args,
        data: {
          ...args.data,

          player: args.data.player
            ? {
                connect: args.data.player,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Squadron)
  async deleteSquadron(
    @graphql.Args() args: DeleteSquadronArgs
  ): Promise<Squadron | null> {
    try {
      return await this.service.deleteSquadron(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Player, {
    nullable: true,
    name: "player",
  })
  async getPlayer(@graphql.Parent() parent: Squadron): Promise<Player | null> {
    const result = await this.service.getPlayer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
