import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { MainService } from "./main.service";
import { Search } from "./dto/search";
@Controller('main')
export class MainController{
    constructor(
        private readonly mainService:MainService
    ){}

    @Post()
    @HttpCode(200)
    getMainContent() {
        return this.mainService.getMainContent()
    }

    @Post('searchWord')
    @HttpCode(200)
    getSearchWord() {
        return this.mainService.getSearchWord()
    }

    @Post('search')
    @HttpCode(200)
    getSearchgoods(@Body() search:Search) {
        return this.mainService.getSearchgoods(search)
    }

    @Post('category')
    @HttpCode(200)
    getCategory() {
        return this.mainService.getCategory()
    }

    @Post('recommend')
    @HttpCode(200)
    getRecommend() {
        return this.mainService.getRecommend()
    }
}