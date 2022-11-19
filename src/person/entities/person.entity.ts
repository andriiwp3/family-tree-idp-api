import { IPersonDocument } from './../types/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'prsn', name: 'persons' })
export class Person implements IPersonDocument {
  @ApiProperty({ description: 'Unique ID' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  fullName: string;

  @ApiProperty()
  @Column()
  age: number;

  //   @ManyToMany(() => Relationship, (relationship) => relationship.persons)
  //   @JoinTable({ name: 'persons_relationships' })
  //   relationships: Relationship[];
}
