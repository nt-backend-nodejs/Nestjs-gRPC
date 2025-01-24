import { Module } from '@nestjs/common';
import { SumController } from './app.controller';

@Module({
  controllers: [SumController],
  providers: [],
})
export class AppModule {}
