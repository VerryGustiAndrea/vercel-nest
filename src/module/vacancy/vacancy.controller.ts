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
} from '@/services';
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
export default class VacancyController {
  constructor(
    private readonly vacancyService: VacancyService,
  ) { }


}
