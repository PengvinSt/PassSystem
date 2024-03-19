import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../config/db-connect.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Allow to use env globaly
      envFilePath: 'envs/.backend.env', //path to env
    }),
    MongooseModule.forRootAsync({//Mongoose connection module
      imports: [ConfigModule], 
      inject: [ConfigService],
      useFactory: getMongoConfig, // config function
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
