import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'todo', // proto fayldagi package nomi
        protoPath: join(__dirname, '../proto/todo.proto'), // proto fayl manzili
        url: 'localhost:50051', // gRPC server manzili:porti
      },
    },
  );
  await app.listen();
  console.log('gRPC mikroservis ishga tushdi. Port: 50051');
}
bootstrap();
