import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn , CreateDateColumn , DeleteDateColumn, OneToOne, JoinColumn} from "typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";
import { Likes } from "src/likes/likes.entity";

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

    @OneToOne(() => Profile , (profile)=> profile.user,{
        cascade: ['insert'],
        // eager:true   //to automate child table operartions
    }) // to implement one to one relation
    profile?: Profile;
    
    @OneToOne(() => Likes,{
        cascade:true,
        eager:true
    })
    @JoinColumn()
    like?:Likes;
    
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deleteAt : Date;
    }
