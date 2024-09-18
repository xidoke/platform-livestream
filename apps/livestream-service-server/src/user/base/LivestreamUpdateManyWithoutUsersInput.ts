/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LivestreamWhereUniqueInput } from "../../livestream/base/LivestreamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LivestreamUpdateManyWithoutUsersInput {
  @Field(() => [LivestreamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LivestreamWhereUniqueInput],
  })
  connect?: Array<LivestreamWhereUniqueInput>;

  @Field(() => [LivestreamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LivestreamWhereUniqueInput],
  })
  disconnect?: Array<LivestreamWhereUniqueInput>;

  @Field(() => [LivestreamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LivestreamWhereUniqueInput],
  })
  set?: Array<LivestreamWhereUniqueInput>;
}

export { LivestreamUpdateManyWithoutUsersInput as LivestreamUpdateManyWithoutUsersInput };