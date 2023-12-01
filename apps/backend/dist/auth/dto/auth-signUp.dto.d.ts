import { Role } from "src/users/entities/role.enum";
export declare class AuthSignupDto {
    username: string;
    email: string;
    password: any;
    role?: Role;
}
