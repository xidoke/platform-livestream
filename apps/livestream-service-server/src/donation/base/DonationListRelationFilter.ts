/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DonationWhereInput } from "./DonationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DonationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DonationWhereInput,
  })
  @ValidateNested()
  @Type(() => DonationWhereInput)
  @IsOptional()
  @Field(() => DonationWhereInput, {
    nullable: true,
  })
  every?: DonationWhereInput;

  @ApiProperty({
    required: false,
    type: () => DonationWhereInput,
  })
  @ValidateNested()
  @Type(() => DonationWhereInput)
  @IsOptional()
  @Field(() => DonationWhereInput, {
    nullable: true,
  })
  some?: DonationWhereInput;

  @ApiProperty({
    required: false,
    type: () => DonationWhereInput,
  })
  @ValidateNested()
  @Type(() => DonationWhereInput)
  @IsOptional()
  @Field(() => DonationWhereInput, {
    nullable: true,
  })
  none?: DonationWhereInput;
}
export { DonationListRelationFilter as DonationListRelationFilter };