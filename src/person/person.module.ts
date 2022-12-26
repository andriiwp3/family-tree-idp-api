import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from './entities/person.entity';

@Module({
  providers: [PersonService],
  controllers: [PersonController],
  exports: [PersonService],
  imports: [TypeOrmModule.forFeature([Person])],
})
export class PersonModule {}
