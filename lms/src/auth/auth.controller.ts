import { Controller,Post } from '@nestjs/common';

@Controller('auth')   //auth/register
export class AuthController {
    authService:AuthService;

    constructor(authService:AuthService){
        this authService=authService;
    }
    @Post('register'){
        register(){
            //Logic for user register
            this.authService.registerUser()
            return{message:"User register Successfully"}
        }
    }
}
