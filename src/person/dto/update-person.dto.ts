import { IPerson } from './../types/interfaces';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdatePersonDto implements Partial<IPerson> {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  age?: number;
}
