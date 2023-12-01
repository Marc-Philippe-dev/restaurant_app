import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { AuthSignupDto } from "../auth/dto/auth-signUp.dto";
import * as bcrypt from 'bcrypt';
import { AuthSigninDto } from "../auth/dto/auth-signin.dto";

@Injectable()
export class UserRepository extends Repository<User> {

	constructor(private dataSource: DataSource) {
		super(User, dataSource.createEntityManager());
	}

	async signUp(authSignupDto: AuthSignupDto) {
		const { username, email, password, role} = authSignupDto;

		const user = new User();

		user.role = role;
		user.username = username;
		user.email = email;
		user.salt = await bcrypt.genSalt()
		user.password = await this.hashPassword(password, user.salt);
		user.created_at = new Date(); 

		 

		try {
			await user.save();
			return {response: "User succcessfully saved."}
		} catch (error) {
			if (error.code === '23505') {
				throw new ConflictException('User already exists');
			}
			else {
				throw new InternalServerErrorException();
			}
		}
	}

	async validateUserPassword(authSigninDto: AuthSigninDto): Promise<string> {
		const { email, password } = authSigninDto;

		const user = await this.findOneBy({ email });
	 
		if (user && await user.validatePassword(password)) {
			return user.username;
		}

		else {
			return null;
		}

	}

	private async hashPassword(password: string, salt: string): Promise<string> {
		return bcrypt.hash(password, salt);
	}
}


