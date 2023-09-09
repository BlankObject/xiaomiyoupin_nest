import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RequestConfig } from "src/utils/requestConfig";
import { AxiosResponse } from 'axios';
import { Observable ,map} from 'rxjs';
import { GetDeatil } from "./dto/get-detail";
@Injectable()
export class CatService{
    constructor(
        private readonly useHttpService: HttpService,
        // private readonly requestConfig:RequestConfig
    ){}

    //不能只返回整个AxiosResponse对象，因为它不能被序列化为JSON。
    getCatList():Observable<AxiosResponse<any[]>>{
        return this.useHttpService.post(
            `https://www.xiaomiyoupin.com/mtop/market/cat/list`,
            [{},{}]
        ).pipe(map(response => response.data.data));
    }

    async getCatDetail(detail: GetDeatil) {
        return this.useHttpService.post(
            `https://www.xiaomiyoupin.com/mtop/market/cat/detail`,
            [{},{catId:detail.catId}]
        ).pipe(map(response => {
            return response.data.data
        }));
    }
}
