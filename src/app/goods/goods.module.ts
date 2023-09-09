import { Module } from "@nestjs/common";
import { GoodsController } from "./goods.controller";
import { GoodsService } from "./goods.service";
import { HttpModule } from '@nestjs/axios';

@Module(
    {
        imports: [HttpModule],
        controllers: [GoodsController],
        providers: [GoodsService],
        exports: []
    }
)
export class GoodsModule{}