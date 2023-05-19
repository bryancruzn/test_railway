import { Injectable } from '@nestjs/common';

@Injectable()
export class HolaService {
  async getHolaMensaje(): Promise<string> {
    return 'Hola mundo';
  }
}
