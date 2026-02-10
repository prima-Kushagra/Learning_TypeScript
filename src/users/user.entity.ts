import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn , CreateDateColumn , DeleteDateColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";
import { Likes } from "src/likes/likes.entity";
import { Tweet } from "src/tweet/tweet.entity";

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
    length: 200
    })
    password: string;

    @OneToOne(() => Profile , (profile)=> profile.user,{
        cascade: ['insert'],
        // eager:true   //to automate child table operartions
    }) // to implement one to one relation
    @JoinColumn()
    profile?: Profile;
    
    @OneToOne(() => Likes,{
        cascade:true,
        eager:true
    })
    @JoinColumn()
    like?:Likes;

      @OneToMany(() => Tweet, (tweet) => tweet.user)
      tweet: Tweet[];
    
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deleteAt : Date;
    }
