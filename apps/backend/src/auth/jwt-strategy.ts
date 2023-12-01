import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../users/user.repository';
import { User } from '../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository) {

		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'topSecret51',
		});

	}

	async validate(payload: JwtPayload): Promise<any> {
		
		const { username } = payload;

		const user = await this.userRepository.findOneBy({ username });
		const { password, salt, ...result } = user;
		
		if (!user) {
			throw new UnauthorizedException('');
		}

		return result;
	}
}