import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../schemas/user.schema';
import { VerifyController } from '../controllers/verify.controller';
import { VerifyService } from '../services/verify.service';
import { PassportModule } from '@nestjs/passport';



@Module({
  imports: [
    MongooseModule.forFeature([ // Import MongooseModule
      {
        name: UserModel.name, // Set name of model in database
        schema: UserSchema, // Set schema of model
      },
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [VerifyController],
  providers: [VerifyService],
  exports: [VerifyService],
})

export class VerifyModule{}
