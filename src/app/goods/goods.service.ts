import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { Query } from './dto/query';
import { map } from 'rxjs';
import { Deatil } from './dto/detail';
import { GetImageDetail } from './dto/get-image-detail';
import { GetComments } from './dto/get-comments';
import { QueryV2 } from './dto/queryV2';
@Injectable()
export class GoodsService{
    constructor(private readonly useHttpService: HttpService,) { }
    getGoodsList(queryInfo:Query) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/market/search/v2/queryIdSearch',
            [{}, queryInfo]).pipe(map(response => response.data.data));
    }

    getGoodsListV2(queryInfo: QueryV2) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/market/search/v2/doSearch', [
            {},{baseParam: {imei: "", clientVersion: "", ypClient: 3},
                clientPageId: "7980079849913395",
                filter: null,
                pageIdx: queryInfo.pageIdx===undefined?0:queryInfo.pageIdx,
                pageSize: queryInfo.pageSize===undefined?20:queryInfo.pageSize,
                query: [{queryName: queryInfo.queryName, queryType: 0, rule: []}],
                recentAddress: null,
                requestExtraInfo: {},
                requestId: "5763463751281444",
                sortBy: 0,
                source: "searchPage",
                strategyInfo: null
            }
        ], {
            headers: {
                cookie:'mjclient=PC; youpindistinct_id=1811a1d6652846-0275441107d5d3-14333270; Hm_lvt_025702dcecee57b18ed6fb366754c1b8=1659867967,1659932131,1660306074,1660380022; youpin_sessionid=182969248e6-07ea17a506fbe7-1fa6; Hm_lpvt_025702dcecee57b18ed6fb366754c1b8=1660383546'
            }
        }).pipe(map(response => response.data.data));
    }
    
    getGoodsDetail(info: Deatil) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/api/gateway/detail',
            { ...info, groupParams: [[info.gid]]}).pipe(map(response => response.data.data))
    }

    getImageDetails(info: GetImageDetail) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/goods/gis/detailpage/getImageDetails',
            [{ gid: info.gid }]).pipe(map(response => response.data.data))
    }

    getDetailRecommend(info: GetImageDetail) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/arch/detail/composeTwo',
            {
                askInfo: { gid: info.gid },
                content: [{},{ gid: info.gid, page: 1, pageSize: 8, type: 1 }],
                live: [{}, { gid: info.gid }],
                liveTwo: [{}, { gid: info.gid }],
                newUserWelcome: [{}, {}],
                relateRecTwo: [{}, { gid: info.gid }],
                searchPlaceHolder: [{}, { gid: info.gid, baseParam: { imei: "", clientVersion: "", ypClient: 1 } }],
                shop: [{ gid: info.gid }],
                topRank: [{ gid: info.gid }],
                userRecTwo: [{}, {gid: info.gid}]
            }, {
                headers: {
                cookie:'mjclient=PC; youpindistinct_id=1811a1d6652846-0275441107d5d3-14333270; Hm_lvt_025702dcecee57b18ed6fb366754c1b8=1659580319,1659610895,1659685156,1659761719; youpin_sessionid=182718af815-090153fab53304-1fa5; Hm_lpvt_025702dcecee57b18ed6fb366754c1b8=1659762309'
            }
        }
        ).pipe(map(response => {
            console.log(response.data)
            return response.data
        }))
    }

    getGoodsCommentTab(info:GetImageDetail) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/market/comment/product/index', {
            gid: info.gid,
            pids:[]
        }).pipe(map(response => response.data.data))
    }

    getGoodsComment(info: GetComments) {
        return this.useHttpService.post('https://www.xiaomiyoupin.com/mtop/market/comment/product/content', {
            gid: info.gid,
            folding: false,
            pids: [],
            pindex: info.pindex?info.pindex:1,
            psize: info.psize ? info.psize : 10,
            sort_type: 0,
            source: "PC",
            tag_id: info.tag_id,
            tag_name: info.tag_name
        }).pipe(map(response => response.data.data))
    }
}