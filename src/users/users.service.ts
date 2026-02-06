import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";
import { Likes } from "src/likes/likes.entity";
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
        private profileRepository : Repository<Profile>,

        @InjectRepository(Likes)
        private likesRepository : Repository<Likes>
    ){

    }
    getAllUsers(){
        return this.userRepository.find({
            relations:{
                profile: true
            }
        })
        // return this.users;
    }


    getAllLikes(){
        return this.likesRepository.find()
    }

 

    public async createUser(userDTO: CreateUserDTO){
       // Create a profile & save
      userDTO.profile =userDTO.profile ?? {};

      userDTO.like = userDTO.like ?? {};
        
       let user = this.userRepository.create(userDTO);
     
       //Set the profile

       // Save the  User Object
       return await this.userRepository.save(user);
    }

    public async deleteUser(id : number){
    //find the user with given id
// let user =  await this.userRepository.findOneBy({id});

    //delteuser 
 await this.userRepository.delete(id);
    //delete the profile
// await this.profileRepository.delete(user.profile.id);
    //send the response
    return {deleted: true}
    }
}