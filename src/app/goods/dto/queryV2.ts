import { IsNotEmpty} from 'class-validator';
export class QueryV2{
    @IsNotEmpty({ message: '分类名不能为空' })
    queryName: string
    
    pageIdx: number
    pageSize:number
}