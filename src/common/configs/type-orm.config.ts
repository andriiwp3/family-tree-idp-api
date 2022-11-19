import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_PORT,
  DB_DBNAME,
  DB_USERNAME,
  DB_PASSWORD,
} from './../constants/env.constants';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>(DB_HOST),
      port: this.configService.get<number>(DB_PORT),
      database: this.configService.get<string>(DB_DBNAME),
      username: this.configService.get<string>(DB_USERNAME),
      password: this.configService.get<string>(DB_PASSWORD),
      entities: ['./person/entities/*.entity.{js,ts}'],
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
