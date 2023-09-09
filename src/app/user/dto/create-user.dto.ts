import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty({ message: '账号必填' })
    account: string
    @IsNotEmpty({ message: '密码必填' })
    password:string
}