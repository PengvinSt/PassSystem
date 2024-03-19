import { Controller, Get, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')

  @ApiOperation({ summary: "Get data from dev 0 point" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  getData() {
    return this.appService.getData();
  }
}
