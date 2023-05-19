import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaController } from './hola/hola.controller';
import { HolaService } from './hola/hola.service';

@Module({
  imports: [],
  controllers: [AppController, HolaController],
  providers: [AppService, HolaService],
})
export class AppModule {}
