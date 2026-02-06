import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";
@Injectable() // First step for Injectable
export class UserService{
    // users: {id:number,name: String , email:String ,gender: string , isMarried: boolean}[] = [
    // {id:1,name:'john', email: 'john@gmail.com' , gender:'male' , isMarried:true  },
    // {id:2,name:'mark', email: 'mark@gmail.com' , gender:'male' , isMarried:false  },
    // {id:3,name:'mary', email: 'mary@gmail.com' , gender:'female' , isMarried:false  }
    
    // ]
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,

        @InjectRepository(Profile)
        private profileRepository : Repository<Profile>
    ){

    }
    getAllUsers(){
        return this.userRepository.find()
        // return this.users;
    }

 

    public async createUser(userDTO: CreateUserDTO){
       // Create a profile & save
       userDTO.profile =userDTO.profile ?? {};
        let profile = this.profileRepository.create(userDTO.profile);
        await this.profileRepository.save(profile);
       //Create the User Object
       let user = this.userRepository.create(userDTO);
       this.profileRepository.save(profile);
       //Set the profile
     user.profile = profile;
       // Save the  User Object
       return await this.userRepository.save(user);
    }
}