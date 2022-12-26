import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonService } from './person.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './entities/person.entity';

@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @ApiOperation({ summary: 'Get person' })
  @ApiOkResponse({ type: Person, description: 'Person object from DB!' })
  @ApiBadRequestResponse({
    description: 'There is no user with such id :(',
  })
  @Get('/:id')
  async getPersonById(@Param('id') personId: string): Promise<Person> {
    return this.personService.getPersonById(personId);
  }

  @ApiOperation({ summary: 'Create person' })
  @ApiOkResponse({ type: Person, description: 'Created person' })
  @ApiBadRequestResponse({ description: 'Incorrect input :(' })
  @Post('/')
  async createPerson(@Body() personDto: CreatePersonDto): Promise<Person> {
    return this.personService.createPerson(personDto);
  }

  @ApiOperation({ summary: 'Update person' })
  @ApiOkResponse({ type: Person, description: 'Updated person!' })
  @ApiBadRequestResponse({ description: 'Incorrect input :(' })
  @Patch('/:id')
  async updatePerson(
    @Param('id') personId: string,
    @Body() personDto: UpdatePersonDto,
  ): Promise<Person> {
    return this.personService.updatePerson(personId, personDto);
  }
}
