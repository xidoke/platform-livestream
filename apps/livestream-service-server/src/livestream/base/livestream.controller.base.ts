/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LivestreamService } from "../livestream.service";
import { LivestreamCreateInput } from "./LivestreamCreateInput";
import { Livestream } from "./Livestream";
import { LivestreamFindManyArgs } from "./LivestreamFindManyArgs";
import { LivestreamWhereUniqueInput } from "./LivestreamWhereUniqueInput";
import { LivestreamUpdateInput } from "./LivestreamUpdateInput";
import { ChatFindManyArgs } from "../../chat/base/ChatFindManyArgs";
import { Chat } from "../../chat/base/Chat";
import { ChatWhereUniqueInput } from "../../chat/base/ChatWhereUniqueInput";
import { DonationFindManyArgs } from "../../donation/base/DonationFindManyArgs";
import { Donation } from "../../donation/base/Donation";
import { DonationWhereUniqueInput } from "../../donation/base/DonationWhereUniqueInput";

export class LivestreamControllerBase {
  constructor(protected readonly service: LivestreamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Livestream })
  async createLivestream(
    @common.Body() data: LivestreamCreateInput
  ): Promise<Livestream> {
    return await this.service.createLivestream({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        category: true,
        createdAt: true,
        description: true,
        endTime: true,
        id: true,
        recordingUrl: true,
        startTime: true,
        status: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        viewerCount: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Livestream] })
  @ApiNestedQuery(LivestreamFindManyArgs)
  async livestreams(@common.Req() request: Request): Promise<Livestream[]> {
    const args = plainToClass(LivestreamFindManyArgs, request.query);
    return this.service.livestreams({
      ...args,
      select: {
        category: true,
        createdAt: true,
        description: true,
        endTime: true,
        id: true,
        recordingUrl: true,
        startTime: true,
        status: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        viewerCount: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Livestream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async livestream(
    @common.Param() params: LivestreamWhereUniqueInput
  ): Promise<Livestream | null> {
    const result = await this.service.livestream({
      where: params,
      select: {
        category: true,
        createdAt: true,
        description: true,
        endTime: true,
        id: true,
        recordingUrl: true,
        startTime: true,
        status: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        viewerCount: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Livestream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLivestream(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() data: LivestreamUpdateInput
  ): Promise<Livestream | null> {
    try {
      return await this.service.updateLivestream({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          category: true,
          createdAt: true,
          description: true,
          endTime: true,
          id: true,
          recordingUrl: true,
          startTime: true,
          status: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          viewerCount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Livestream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLivestream(
    @common.Param() params: LivestreamWhereUniqueInput
  ): Promise<Livestream | null> {
    try {
      return await this.service.deleteLivestream({
        where: params,
        select: {
          category: true,
          createdAt: true,
          description: true,
          endTime: true,
          id: true,
          recordingUrl: true,
          startTime: true,
          status: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          viewerCount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/chats")
  @ApiNestedQuery(ChatFindManyArgs)
  async findChats(
    @common.Req() request: Request,
    @common.Param() params: LivestreamWhereUniqueInput
  ): Promise<Chat[]> {
    const query = plainToClass(ChatFindManyArgs, request.query);
    const results = await this.service.findChats(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        livestream: {
          select: {
            id: true,
          },
        },

        message: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/chats")
  async connectChats(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: ChatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chats: {
        connect: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/chats")
  async updateChats(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: ChatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chats: {
        set: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/chats")
  async disconnectChats(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: ChatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chats: {
        disconnect: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/donations")
  @ApiNestedQuery(DonationFindManyArgs)
  async findDonations(
    @common.Req() request: Request,
    @common.Param() params: LivestreamWhereUniqueInput
  ): Promise<Donation[]> {
    const query = plainToClass(DonationFindManyArgs, request.query);
    const results = await this.service.findDonations(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        livestream: {
          select: {
            id: true,
          },
        },

        message: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/donations")
  async connectDonations(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: DonationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      donations: {
        connect: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/donations")
  async updateDonations(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: DonationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      donations: {
        set: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/donations")
  async disconnectDonations(
    @common.Param() params: LivestreamWhereUniqueInput,
    @common.Body() body: DonationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      donations: {
        disconnect: body,
      },
    };
    await this.service.updateLivestream({
      where: params,
      data,
      select: { id: true },
    });
  }
}