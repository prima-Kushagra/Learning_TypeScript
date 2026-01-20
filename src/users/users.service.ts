export class UserService{
    users: {id:number,name: String , age:number ,gender: string , isMarried: boolean}[] = [
    {id:1,name:'john', age: 32 , gender:'male' , isMarried:true  },
    {id:2,name:'mark', age: 28 , gender:'male' , isMarried:false  },
    {id:3,name:'mary', age: 12 , gender:'female' , isMarried:false  }
    
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id:number){
        return this.users.find(x => x.id === id);
    }

    createUser(user:{id:number,name: String , age:number ,gender: string , isMarried: boolean}){
        this.users.push(user);
    }
}