  import { Module, forwardRef } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vacancy } from './vacancy.model';


@Module({
  imports: [
    SequelizeModule.forFeature([Vacancy]),
  ],
  controllers: [VacancyController],
  providers: [VacancyService],
  exports: [VacancyService],
})
export class VacancyModule { }
