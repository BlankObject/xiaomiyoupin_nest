import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MainController } from "./main.controller";
import { MainService } from "./main.service";
@Module({
    imports: [HttpModule],
    controllers: [MainController],
    providers: [MainService],
    exports:[]
})
export class MainModule{}