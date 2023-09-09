import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from '../config/env';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { UserModule } from './app/user/user.module';
import { GoodsModule } from './app/goods/goods.module';
import { AuthModule } from './app/auth/auth.module';
import { CatModule } from './app/cat/cat.module';
import { MainModule } from './app/main/main.module';
@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,  // 设置为全局
      envFilePath: [envConfig.path] 
     }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          type: 'mysql', // 数据库类型
          entities: [],  // 数据表实体
          host: configService.get('DB_HOST', '120.25.203.42'), // 主机，默认为localhost
          port: configService.get<number>('DB_PORT', 3306), // 端口号
          username: configService.get('DB_USER', 'root'),   // 用户名
          password: configService.get('DB_PASSWORD', 'Yiho-2344'), // 密码
          database: configService.get('DB_DATABASE', 'xmyp'), //数据库名
          timezone: '+08:00', //服务器上配置的时区
          synchronize:false, //根据实体自动创建数据库表， 生产环境建议关闭
          autoLoadEntities: true
        }),
      }),
    // TypeOrmModule.forRoot(),
    
    UserModule,
    GoodsModule,
    AuthModule,
    CatModule,
    MainModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
