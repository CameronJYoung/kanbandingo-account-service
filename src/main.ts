import { config } from 'dotenv';
config();

import { createConnection } from 'typeorm';

import AccountController from './controllers/AccountController';
import AccountService from './services/AccountService';
import KafkaClient from './singletons/KafkaClient';
import { Account } from './entities/Account';


const run = async () => {
	const connection = await createConnection();
	console.log(connection.isConnected);
	
	const accountController = new AccountController('account', new AccountService(connection, Account));

	await KafkaClient.listenToTopics(accountController.getTopics());
};

run();