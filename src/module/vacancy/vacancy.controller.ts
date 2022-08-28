import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  BadRequestException,
  UseInterceptors,
  UploadedFiles,
  Req,
  Query,
  HttpException,
} from '@nestjs/common';
import {
  VacancyService,
} from './vacancy.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
  ApiOperation
} from '@nestjs/swagger';

@ApiTags('vacancy')
@Controller('/vacancy')
export class VacancyController {
  constructor(
    private readonly vacancyService: VacancyService,
  ) { }


}
