import { Body, Controller ,Get, HttpCode, Post,HttpException,ClassSerializerInterceptor,UseInterceptors, UseGuards, Req} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    async getUserInfo(@Req() user) {
        // return this.UserService.findOne()
        console.log(user)
        return user.user
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('register')
    @HttpCode(200)
    async register(@Body() regInfo:CreateUserDto) {
        return await this.userService.register(regInfo)
    }

}