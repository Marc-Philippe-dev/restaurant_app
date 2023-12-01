import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcrypt";
import { Role } from "./role.enum";
 
 


@Entity()
@Unique(['email'])
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;


	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	created_at : Date

	@Column()
	salt: string;

	@Column({
		type: "enum",
		enum: Role,
		default: Role.ADMIN,
	})
	role: Role;


	async validatePassword(password: string): Promise<boolean> {
		const hash = await bcrypt.hash(password, this.salt);

		return this.password === hash;
	}



}
