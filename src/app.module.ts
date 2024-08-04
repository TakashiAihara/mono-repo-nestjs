import { GreetingService } from '@/application/services/greeting';
import { IGreetingService } from '@/application/services/interfaces/greeting';
import { IGreetingRepository } from '@/domain/interfaces/repositories/greeting';
import { GreetingRepository } from '@/infrastructure/repositories/greeting';
import { AppController } from '@/presentation/controllers/app';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: IGreetingService,
      useClass: GreetingService,
    },
    {
      provide: IGreetingRepository,
      useClass: GreetingRepository,
    },
  ],
})
export class AppModule {}
