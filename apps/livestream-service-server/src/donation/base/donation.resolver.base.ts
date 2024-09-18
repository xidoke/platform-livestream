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
import { Donation } from "./Donation";
import { DonationCountArgs } from "./DonationCountArgs";
import { DonationFindManyArgs } from "./DonationFindManyArgs";
import { DonationFindUniqueArgs } from "./DonationFindUniqueArgs";
import { CreateDonationArgs } from "./CreateDonationArgs";
import { UpdateDonationArgs } from "./UpdateDonationArgs";
import { DeleteDonationArgs } from "./DeleteDonationArgs";
import { Livestream } from "../../livestream/base/Livestream";
import { User } from "../../user/base/User";
import { DonationService } from "../donation.service";
@graphql.Resolver(() => Donation)
export class DonationResolverBase {
  constructor(protected readonly service: DonationService) {}

  async _donationsMeta(
    @graphql.Args() args: DonationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Donation])
  async donations(
    @graphql.Args() args: DonationFindManyArgs
  ): Promise<Donation[]> {
    return this.service.donations(args);
  }

  @graphql.Query(() => Donation, { nullable: true })
  async donation(
    @graphql.Args() args: DonationFindUniqueArgs
  ): Promise<Donation | null> {
    const result = await this.service.donation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Donation)
  async createDonation(
    @graphql.Args() args: CreateDonationArgs
  ): Promise<Donation> {
    return await this.service.createDonation({
      ...args,
      data: {
        ...args.data,

        livestream: args.data.livestream
          ? {
              connect: args.data.livestream,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Donation)
  async updateDonation(
    @graphql.Args() args: UpdateDonationArgs
  ): Promise<Donation | null> {
    try {
      return await this.service.updateDonation({
        ...args,
        data: {
          ...args.data,

          livestream: args.data.livestream
            ? {
                connect: args.data.livestream,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Donation)
  async deleteDonation(
    @graphql.Args() args: DeleteDonationArgs
  ): Promise<Donation | null> {
    try {
      return await this.service.deleteDonation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Livestream, {
    nullable: true,
    name: "livestream",
  })
  async getLivestream(
    @graphql.Parent() parent: Donation
  ): Promise<Livestream | null> {
    const result = await this.service.getLivestream(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Donation): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}