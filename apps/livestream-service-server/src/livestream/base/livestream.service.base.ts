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
  Livestream as PrismaLivestream,
  Chat as PrismaChat,
  Donation as PrismaDonation,
  User as PrismaUser,
} from "@prisma/client";

export class LivestreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LivestreamCountArgs, "select">
  ): Promise<number> {
    return this.prisma.livestream.count(args);
  }

  async livestreams(
    args: Prisma.LivestreamFindManyArgs
  ): Promise<PrismaLivestream[]> {
    return this.prisma.livestream.findMany(args);
  }
  async livestream(
    args: Prisma.LivestreamFindUniqueArgs
  ): Promise<PrismaLivestream | null> {
    return this.prisma.livestream.findUnique(args);
  }
  async createLivestream(
    args: Prisma.LivestreamCreateArgs
  ): Promise<PrismaLivestream> {
    return this.prisma.livestream.create(args);
  }
  async updateLivestream(
    args: Prisma.LivestreamUpdateArgs
  ): Promise<PrismaLivestream> {
    return this.prisma.livestream.update(args);
  }
  async deleteLivestream(
    args: Prisma.LivestreamDeleteArgs
  ): Promise<PrismaLivestream> {
    return this.prisma.livestream.delete(args);
  }

  async findChats(
    parentId: string,
    args: Prisma.ChatFindManyArgs
  ): Promise<PrismaChat[]> {
    return this.prisma.livestream
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .chats(args);
  }

  async findDonations(
    parentId: string,
    args: Prisma.DonationFindManyArgs
  ): Promise<PrismaDonation[]> {
    return this.prisma.livestream
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .donations(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.livestream
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}