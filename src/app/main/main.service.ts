import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from 'rxjs';
import { Search } from "./dto/search";

@Injectable()
export class MainService{
    constructor(
        private readonly httpService:HttpService
    ) { }
    
    getMainContent() {
        return this.httpService.post(
            `https://www.xiaomiyoupin.com/homepage/main/v1002?platform=pc`,
        ).pipe(map(response=>response.data.data))
    }

    getSearchWord() {
        return this.httpService.post(
            `https://www.xiaomiyoupin.com/mtop/market/search/placeHolder`,
            [{},{ypClient:3}]
        ).pipe(map(response=>response.data.data))
    }

    getSearchgoods(search:Search) {
        return this.httpService.post('https://www.xiaomiyoupin.com/mtop/market/search/v2/suggest/v2', [
            {},{query:search.query,baseParam: {imei: "", clientVersion: "", ypClient: 3}}
        ]).pipe(map(response=>response.data.data))
    }

    getCategory() {
        return this.httpService.post(
            `https://www.xiaomiyoupin.com/mtop/market/cat/list`,
            [{},{}]
        ).pipe(map(response=>response.data.data))
    }

    getRecommend() {
        return this.httpService.post(
            `https://www.xiaomiyoupin.com/homepage/main/v1005?platform=pc`,
        ).pipe(map(response=>response.data.data))
    }
}