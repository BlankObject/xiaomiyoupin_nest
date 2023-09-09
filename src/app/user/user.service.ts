import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

interface FindOneOptions{
    where:object
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }
    
    async findOne(options:FindOneOptions) {
        return await this.userRepository.findOne(options)
    }

    async register(userInfo: CreateUserDto): Promise<UserEntity> {
        const { account } = userInfo;
        let dataInfo = await this.userRepository.findOne({ where: { account } })
        if (dataInfo) {
            throw new HttpException("用户名已存在", HttpStatus.BAD_REQUEST)
        }
        const newUser = await this.userRepository.create(userInfo)
        return await this.userRepository.save(newUser);
    }
}