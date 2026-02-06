import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn , CreateDateColumn , DeleteDateColumn, OneToOne, JoinColumn} from "typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";

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

    @OneToOne(() => Profile) // to implement one to one relation
    @JoinColumn()
    profile?: Profile;
    
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deleteAt : Date;
    }
