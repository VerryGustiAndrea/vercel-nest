import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'testingS'+ process.env.TEKS;
    
  }
}
