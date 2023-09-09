import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class Query{
    @IsNotEmpty({message:'查询id不能为空'})
    queryId: string
    
    @IsNotEmpty({ message: '查询分类名不能为空' })
    queryString: string
    
    // @IsNumber()
    // pageIdx?: number
    
    // @IsNumber()
    // pageSize?:number

    @IsNotEmpty({ message: 'source 不能为空' })
    source:string
}