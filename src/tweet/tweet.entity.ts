import { HashTag } from "src/hashtag/hashtag.entity";
import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn ,Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Tweet{

    @PrimaryGeneratedColumn()
id:number;

@Column({type : 'text'})
text: string;

    @Column({
      type: 'text',
      nullable : true
    })
    image ?: string;

 @CreateDateColumn()
    createdAt : Date;
    
@UpdateDateColumn()
updatedAt : Date;

@ManyToOne(() => User,user => user.tweet )
user:User;

@ManyToMany(() => HashTag)
@JoinTable()
hashtag : HashTag[];
}