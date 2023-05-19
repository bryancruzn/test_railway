import { Controller, Get } from '@nestjs/common';
import { HolaService } from './hola.service';

@Controller('hola')
export class HolaController {
  constructor(private readonly holaService: HolaService) {}

  @Get()
  async saludar(): Promise<string> {
    const mensaje = await this.holaService.getHolaMensaje();
    return mensaje;
  }
}
