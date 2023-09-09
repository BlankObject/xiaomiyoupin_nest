import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number; // 标记为主列，值自动生成

    @Column({ default:null})
    name: string;

    @Exclude()
    @Column({select:false}) //表示查询时隐藏此列 但只在查询隐藏 其他返回不隐藏
    password: string;

    @Column({ })
    account:string

    // @Column("text")
    // content:string;

    // @Column({default:''})
    // thumb_url: string;

    // @Column('tinyint')
    // type:number

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    create_at: Date

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    update_at: Date

    @BeforeInsert() 
    async encryptPwd() { 
        this.password = await bcrypt.hashSync(this.password); 
    }
}