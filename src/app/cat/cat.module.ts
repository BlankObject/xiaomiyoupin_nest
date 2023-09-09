import { Module } from "@nestjs/common";
import { CatController } from "./cat.controller";
import { CatService } from "./cat.service";
import { HttpModule } from '@nestjs/axios';
import { RequestConfig } from "../../utils/requestConfig";


@Module({
    imports: [HttpModule,RequestConfig],
    controllers:[CatController],
    providers: [CatService],
    exports:[]
})
export class CatModule{}