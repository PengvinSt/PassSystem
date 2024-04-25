import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../schemas/user.schema';
import { UserService } from '../services/user.service';
import { UserResolver } from '../resolver/user.resolver';


@Module({
  imports: [
    MongooseModule.forFeature([ // Import MongooseModule
      {
        name: UserModel.name, // Set name of model in database
        schema: UserSchema, // Set schema of model
      },
    ]),
  ],
  providers: [UserService, UserResolver], 
  exports: [UserService, UserResolver], // Export UsersService to use it out of the module
})

export class UserModule{}