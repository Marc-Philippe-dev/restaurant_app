import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';
import { AuthSignupDto } from './dto/auth-signUp.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepository) private userRepository: UserRepository,
		private jwtservice: JwtService
	) { }


	async signUp(authSignupDto: AuthSignupDto) { 
		return this.userRepository.signUp(authSignupDto);
	}

	async signIn(authSigninDto: AuthSignupDto): Promise<{ accessToken: string }>{
		
		const username = await this.userRepository.validateUserPassword(authSigninDto);

		
		if (!username) {
			throw new UnauthorizedException('Invalid Credentials')
		}

		const payload: JwtPayload = { username :username };
 
		
		const accessToken = await this.jwtservice.sign(payload);
		  
		return {accessToken};
	}

}


