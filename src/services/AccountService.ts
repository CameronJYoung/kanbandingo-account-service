import { Connection, Repository, EntityTarget } from 'typeorm';

import { Account, IAccount } from '../entities/Account';

export default class AccountService {
	private repository: Repository<Account>;

	constructor(db: Connection, model: EntityTarget<Account>) {
		this.repository = db.getRepository(model);
	}

	public async createAccount({ firstName, lastName, password, email, username }: IAccount) {
		const newAccount = new Account();
		newAccount.firstName = firstName;
		newAccount.lastName = lastName;
		newAccount.username = username;
		newAccount.email = email;
		newAccount.password = password;
		await this.repository.save(newAccount);
	}
}