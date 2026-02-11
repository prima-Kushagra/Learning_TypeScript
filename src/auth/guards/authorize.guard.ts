import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import authConfig from "../config/auth.config";
import type { ConfigType } from "@nestjs/config";

@Injectable()
export class AuthorizeGuard implements CanActivate{
    constructor(
        private readonly jwtService : JwtService,
        @Inject(authConfig.KEY)
        private readonly authConfiguration : ConfigType<typeof authConfig>
    ){}
   async canActivate(context: ExecutionContext):  Promise<boolean>  {
        //1. extract request from execution context
    const request : Request = context.switchToHttp().getRequest();
        //2. Extract token from the request header
        //bearee+ actual-json-web-token = ['Bearer' , 'actual-json-web-token']
    const token = request.headers.authorization?.split(' ')[1];
        //3. validate token and provide / deny acccess
        if(!token){
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService
                .verifyAsync(token , this.authConfiguration)
                request['user'] = payload;
                console.log(payload)
        } catch (error) {
            throw new UnauthorizedException();
        }
            
        return true;
    }

}