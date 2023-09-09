import { IsNotEmpty } from 'class-validator';
export class GetImageDetail{
    @IsNotEmpty({message:'gid不能为空'})
    gid: string|number
}