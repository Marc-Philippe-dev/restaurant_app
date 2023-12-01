import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { AuthSignupDto } from "../auth/dto/auth-signUp.dto";
import { AuthSigninDto } from "../auth/dto/auth-signin.dto";
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    signUp(authSignupDto: AuthSignupDto): Promise<{
        response: string;
    }>;
    validateUserPassword(authSigninDto: AuthSigninDto): Promise<string>;
    private hashPassword;
}
