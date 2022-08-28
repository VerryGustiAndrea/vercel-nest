  import { Module, forwardRef } from '@nestjs/common';
import { VacancyController } from '@/controllers';
import { VacancyService } from '@/services';
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
export default class VacancyModule { }
