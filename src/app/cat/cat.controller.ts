import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CatService } from "./cat.service";
import { GetDeatil } from "./dto/get-detail";

@Controller('cat')
export class CatController{
    constructor(
        private readonly useCatService: CatService,
    ) { }
    
    @Post('list')
    @HttpCode(200)
    getCatList() {
        return this.useCatService.getCatList()
    }

    @Post('detail')
    @HttpCode(200)
    getCatDetail(@Body() detail:GetDeatil) {
        return this.useCatService.getCatDetail(detail)
    }
}