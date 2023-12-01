import { AuthSignupDto } from './dto/auth-signUp.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authSignupDto: AuthSignupDto): Promise<{
        response: string;
    }>;
    signIn(authSigninDto: AuthSignupDto): Promise<{
        accessToken: string;
    }>;
}
