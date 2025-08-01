import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('ENV VALUE:', process.env.POSTGRES_CONNECTION);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000,()=>{
    console.log('the server run in port 3000');

  });
}
bootstrap();
