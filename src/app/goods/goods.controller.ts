import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { GoodsService } from "./goods.service";
import { Query } from "./dto/query";
import { Deatil } from "./dto/detail";
import { GetImageDetail } from "./dto/get-image-detail";
import { GetComments } from "./dto/get-comments";
import { QueryV2 } from "./dto/queryV2";
@Controller('goods')
export class GoodsController{
    constructor(private readonly GoodsService: GoodsService) { }
    @Post('catList')
    @HttpCode(200)
    getGoodsList(@Body() queryInfo:Query) {
        return this.GoodsService.getGoodsList(queryInfo)
    }

    @Post('catList/v2')
    @HttpCode(200)
    getGoodsListV2(@Body() queryInfo:QueryV2) {
        return this.GoodsService.getGoodsListV2(queryInfo)
    }

    @Post('detail')
    @HttpCode(200)
    getGoodsDetail(@Body() info:Deatil) {
        return this.GoodsService.getGoodsDetail(info)
    }

    @Post('getImageDetails')
    @HttpCode(200)
    getImageDetails(@Body() info:GetImageDetail) {
        return this.GoodsService.getImageDetails(info)
    }

    @Post('getDetailRecommend')
    @HttpCode(200)
    getDetailRecommend(@Body() info: GetImageDetail) {
        return this.GoodsService.getDetailRecommend(info)
    }

    @Post('comment/tab')
    @HttpCode(200)
    getGoodsCommentTab(@Body() info:GetImageDetail) {
        return this.GoodsService.getGoodsCommentTab(info)
    }

    @Post('comment')
    @HttpCode(200)
    getGoodsComment(@Body() info:GetComments) {
        return this.GoodsService.getGoodsComment(info)
    }
}