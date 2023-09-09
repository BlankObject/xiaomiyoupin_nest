import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class GetDeatil {
    // @IsNotEmpty({ message: '分类id必填' })
    // @IsString({message:'catId type is string!'})
    catId: string
}