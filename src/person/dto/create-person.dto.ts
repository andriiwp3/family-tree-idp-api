import { IPerson } from './../types/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreatePersonDto implements IPerson {
  @ApiProperty({ required: true })
  @IsString()
  fullName: string;

  @ApiProperty({ required: true })
  @IsInt()
  age: number;
}
