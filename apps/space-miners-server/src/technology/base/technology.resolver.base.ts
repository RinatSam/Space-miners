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
import { Technology } from "./Technology";
import { TechnologyCountArgs } from "./TechnologyCountArgs";
import { TechnologyFindManyArgs } from "./TechnologyFindManyArgs";
import { TechnologyFindUniqueArgs } from "./TechnologyFindUniqueArgs";
import { CreateTechnologyArgs } from "./CreateTechnologyArgs";
import { UpdateTechnologyArgs } from "./UpdateTechnologyArgs";
import { DeleteTechnologyArgs } from "./DeleteTechnologyArgs";
import { TechnologyService } from "../technology.service";
@graphql.Resolver(() => Technology)
export class TechnologyResolverBase {
  constructor(protected readonly service: TechnologyService) {}

  async _technologiesMeta(
    @graphql.Args() args: TechnologyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Technology])
  async technologies(
    @graphql.Args() args: TechnologyFindManyArgs
  ): Promise<Technology[]> {
    return this.service.technologies(args);
  }

  @graphql.Query(() => Technology, { nullable: true })
  async technology(
    @graphql.Args() args: TechnologyFindUniqueArgs
  ): Promise<Technology | null> {
    const result = await this.service.technology(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Technology)
  async createTechnology(
    @graphql.Args() args: CreateTechnologyArgs
  ): Promise<Technology> {
    return await this.service.createTechnology({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Technology)
  async updateTechnology(
    @graphql.Args() args: UpdateTechnologyArgs
  ): Promise<Technology | null> {
    try {
      return await this.service.updateTechnology({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Technology)
  async deleteTechnology(
    @graphql.Args() args: DeleteTechnologyArgs
  ): Promise<Technology | null> {
    try {
      return await this.service.deleteTechnology(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}