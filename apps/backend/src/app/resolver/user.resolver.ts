import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../schemas/user.schema';
import { UserService } from '../services/user.service';
import { UserInputDto, UserOutputDto } from '../dto/user.dto';



@Resolver(() => UserModel)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [UserModel])
    async findManyUsers():Promise<UserModel[]> {
        return this.userService.findMany()
    }

    @Query(() => UserModel)
    async findOneUser(@Args('uuid') uuid:string):Promise<UserModel> {
        const options = { uuid: uuid}
        return this.userService.findOne(options)
    }

    @Mutation(()=> UserOutputDto)
    async modifyOneUser(@Args('UserInputDto') user: UserInputDto):Promise<UserOutputDto> {
        return this.userService.modifyOneUser(user)
    }

    @Mutation(() => Boolean)
    async banUser(@Args('uuid') uuid:string):Promise<boolean> {
        return this.userService.banUser(uuid)
    }
}  