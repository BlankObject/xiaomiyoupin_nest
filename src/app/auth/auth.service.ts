import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/app/user/user.entity";
import { UserService } from "src/app/user/user.service";
@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }
    
    // 生成token
    createToken(user: Partial<UserEntity>) {
        return this.jwtService.sign(user);
    }
    async login(loginInfo:UserEntity):Promise<any> {
        return {
           token:this.createToken({
            id: loginInfo.id,
            account: loginInfo.account,
          })
       }
    }

    async getUser(user:Partial<UserEntity>) {
        return await this.userService.findOne({where:{id:user.id}});
    }
}
