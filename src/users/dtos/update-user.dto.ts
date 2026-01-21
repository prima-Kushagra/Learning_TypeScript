import { PartialType } from '@nestjs/mapped-types';
// PartialType is a helper from NestJS that
// takes an existing DTO and makes ALL its fields optional

import { CreateUserDTO } from './create-user.dto';
// Importing CreateUserDTO which usually contains
// required fields for creating a user (POST request)

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  // UpdateUserDTO inherits all properties from CreateUserDTO
  // but converts every field into OPTIONAL

  // This is useful for UPDATE (PATCH) operations where:
  // - You don't need to send all fields
  // - Only the fields you want to update are required

  // Example:
  // CreateUserDTO:
  // {
  //   name: string;
  //   age: number;
  //   email: string;
  // }
  //
  // UpdateUserDTO:
  // {
  //   name?: string;
  //   age?: number;
  //   email?: string;
  // }

  // No extra code is needed here because PartialType
  // automatically handles everything
}
