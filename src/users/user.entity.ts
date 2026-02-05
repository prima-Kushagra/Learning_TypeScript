import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn , CreateDateColumn , DeleteDateColumn} from "typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";

    @Entity()
    export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
    type: 'varchar',
    nullable: false,
    length: 24,
    unique:true
    })
    username: string;

    @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    unique:true
    })
    email: string;

    @Column({
    type: 'varchar',
    nullable: false,
    length: 20
    })
    password: string;
    
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deleteAt : Date;
    }
