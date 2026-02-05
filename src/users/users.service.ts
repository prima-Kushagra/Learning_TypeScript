import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
@Injectable() // First step for Injectable
export class UserService{
    // users: {id:number,name: String , email:String ,gender: string , isMarried: boolean}[] = [
    // {id:1,name:'john', email: 'john@gmail.com' , gender:'male' , isMarried:true  },
    // {id:2,name:'mark', email: 'mark@gmail.com' , gender:'male' , isMarried:false  },
    // {id:3,name:'mary', email: 'mary@gmail.com' , gender:'female' , isMarried:false  }
    
    // ]
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){

    }
    getAllUsers(){
        return this.userRepository.find()
        // return this.users;
    }

 

    public async createUser(userDTO: CreateUserDTO){
        // this.users.push(user);
        //validating the user using emial
        const user = await this.userRepository.findOne({
            where: {email: userDTO.email}
        })
        //handle the url
        if(user){
           return  `The ${user} with the given email already exsists!`
        }

        // create user 
        let newUser =this.userRepository.create(userDTO);
        newUser =  await this.userRepository.save(newUser);
        return newUser;
    }
}