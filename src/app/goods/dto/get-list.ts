import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class GetDeatil {
    @IsNotEmpty({ message: 'pageIdx id必填' })
    pageIdx: string
    @IsNotEmpty({ message: 'pageSize id必填' })
    pageSize:string
}