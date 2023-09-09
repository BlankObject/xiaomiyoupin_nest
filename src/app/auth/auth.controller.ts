import { Body, ClassSerializerInterceptor, Controller, HttpCode, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "src/app/user/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { UserEntity } from "src/app/user/user.entity";
@Controller('auth')
export class AuthController {
    constructor(
        private readonly AuthService: AuthService
    ) {
        
    }
    @Post('login')
    @HttpCode(200)
    @UseGuards(AuthGuard('local')) //登录验证
    @UseInterceptors(ClassSerializerInterceptor) //过滤password字段
    async login(@Body() user: CreateUserDto, @Req() req) {
       return await this.AuthService.login(req.user as UserEntity)
    }
}