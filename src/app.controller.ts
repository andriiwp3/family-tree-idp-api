import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Healthcheck')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Check the health of the server' })
  @ApiOkResponse({ description: 'Server is working!' })
  @ApiInternalServerErrorResponse({ description: 'Server is down :(' })
  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
