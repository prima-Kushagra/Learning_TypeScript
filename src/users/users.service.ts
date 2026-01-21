import { Injectable } from "@nestjs/common";

@Injectable() // First step for Injectable
export class UserService{
    users: {id:number,name: String , email:String ,gender: string , isMarried: boolean}[] = [
    {id:1,name:'john', email: 'john@gmail.com' , gender:'male' , isMarried:true  },
    {id:2,name:'mark', email: 'mark@gmail.com' , gender:'male' , isMarried:false  },
    {id:3,name:'mary', email: 'mary@gmail.com' , gender:'female' , isMarried:false  }
    
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id:number){
        return this.users.find(x => x.id === id);
    }

    createUser(user:{id:number,name: String , email:String ,gender: string , isMarried: boolean}){
        this.users.push(user);
    }
}