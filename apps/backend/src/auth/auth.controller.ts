import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth-signUp.dto';
import { AuthService } from './auth.service';
 
 
 

@Controller('auth')
export class AuthController {

	constructor(private authService : AuthService){}

	@Post('/signup')
	async signUp(@Body(ValidationPipe) authSignupDto: AuthSignupDto) { 
	 return this.authService.signUp(authSignupDto);
	}

	 
	@Post('/signin')
	signIn(@Body() authSigninDto: AuthSignupDto): Promise<{accessToken : string}> {
		return this.authService.signIn(authSigninDto);
	}

}


