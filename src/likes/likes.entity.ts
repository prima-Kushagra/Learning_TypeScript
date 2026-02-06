import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Likes{

@PrimaryGeneratedColumn()
LikesID : number;

@Column({
    type: 'boolean',
    nullable: true
})
expression : boolean

@Column({
    type: 'varchar',
    nullable: true,
    length : 100
})
comment : string

@CreateDateColumn()
createAtTime : Date

}