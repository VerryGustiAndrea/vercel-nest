import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  Table,
  AutoIncrement,
  DataType,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Vacancy extends Model<Vacancy> {
  @ApiProperty()
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.BIGINT })
  id_vacancy: number;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  title_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  description_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  type_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  city_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  country_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  company_vacancy: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  description_company: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  photo_company: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  legality_file_company: string;
}
