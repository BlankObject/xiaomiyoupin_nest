import { IsNotEmpty } from 'class-validator';
export class Deatil{
    @IsNotEmpty({message:'分组名不能为空'})
    groupName: string
    // @IsNotEmpty({ message: 'pid 不能为空' })
    pid: string
    @IsNotEmpty({ message: 'gid 不能为空' })
    gid:string
}