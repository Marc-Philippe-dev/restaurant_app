import { BaseEntity } from "typeorm";
import { Role } from "./role.enum";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    salt: string;
    role: Role;
    validatePassword(password: string): Promise<boolean>;
}
