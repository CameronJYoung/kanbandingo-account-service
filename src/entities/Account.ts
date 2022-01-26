import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface IAccount {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
}

@Entity()
export class Account {
	@PrimaryGeneratedColumn()
		id!: number;

	@Column()
		firstName!: string;

	@Column()
		lastName!: string;

	@Column()
		username!: string;

	@Column()
		email!: string;

	@Column()
		password!: string;
}