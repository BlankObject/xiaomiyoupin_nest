import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { UserEntity } from "src/app/user/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {LocalStorage} from "./local.strategy"
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/app/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { JwtStorage } from "./jwt.strategy";

const jwtModule = JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return {
        secret: configService.get('SECRET', 'yiho123'),
        signOptions: { expiresIn: '4h' },
      };
    },
});
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]),PassportModule,jwtModule,UserModule],
    controllers: [AuthController],
    providers: [AuthService,LocalStorage,JwtStorage],
    exports: [jwtModule]
})
export class AuthModule {}
