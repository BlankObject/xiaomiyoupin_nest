import { IsNotEmpty } from 'class-validator';
export class GetComments{
    @IsNotEmpty({message:'gid 不能为空'})
    gid: string
    pindex: number
    psize: number
    @IsNotEmpty({message:'tag_id 不能为空'})
    tag_id: string
    @IsNotEmpty({message:'tag_name 不能为空'})
    tag_name:string
}