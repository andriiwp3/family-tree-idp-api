import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './entities/person.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async getPersonById(personId: string): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id: personId },
    });

    if (!person) {
      throw new BadRequestException('There is no user with such id!');
    }

    return person;
  }

  async createPerson(personDto: CreatePersonDto): Promise<Person> {
    const person = this.personRepository.create(personDto);
    const savedPerson = await this.personRepository.save(person);

    return savedPerson;
  }

  async updatePerson(
    personId: string,
    personDto: UpdatePersonDto,
  ): Promise<Person> {
    const person = await this.getPersonById(personId);
    const updatedPerson = await this.personRepository.save({
      ...person,
      ...personDto,
    });

    return updatedPerson;
  }
}
