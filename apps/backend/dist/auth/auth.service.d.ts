import { UserRepository } from '../users/user.repository';
import { AuthSignupDto } from './dto/auth-signUp.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtservice;
    constructor(userRepository: UserRepository, jwtservice: JwtService);
    signUp(authSignupDto: AuthSignupDto): Promise<{
        response: string;
    }>;
    signIn(authSigninDto: AuthSignupDto): Promise<{
        accessToken: string;
    }>;
}
