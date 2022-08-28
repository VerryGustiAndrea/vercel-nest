import { BadRequestException, Injectable, Logger, forwardRef, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectModel } from '@nestjs/sequelize';
import { Vacancy } from './vacancy.model';

const { Op } = require("sequelize");

// const redis = new Redis({
//   port: Number(process.env.REDIS_PORT || 6379), // Redis port
//   host: process.env.REDIS_HOST || '127.0.0.1', // Redis host
//   password: process.env.REDIS_PASSWORD || '',
//   db: 0,
// });


@Injectable()
export default class VacancyService {
  constructor(
    @InjectModel(Vacancy) public vacancyModel: typeof Vacancy,
    public readonly mailerService: MailerService,
  ) {
  }

  static saltRounds = 10;

}
