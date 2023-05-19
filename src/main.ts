import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = ['http://localhost:3002', 'r://nextapp-production.up.railway.app', 'https://evil-riddle-production.up.railway.app'];

  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200
  }));

  await app.listen(3000);
}
bootstrap();
