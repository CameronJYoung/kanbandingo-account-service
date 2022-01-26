import { BaseController, MethodTypes, messageConversions } from '@cameronjyoung/microservice-util-library';
import { EachMessagePayload } from 'kafkajs';

import AccountService from '../services/AccountService';
import { IAccount } from '../entities/Account';

export default class AccountController extends BaseController {
	private accountService: AccountService;

	constructor(serviceName: string, accountService: AccountService) {
		super(serviceName);
		this.accountService = accountService;
	}
	
	public methods() {
		
		return [
			{
				type: MethodTypes.POST,
				action: 'createAccount',
				handler: async (payload: EachMessagePayload, topic: string) => {
					if (payload.message.value) {
						const reqParams = messageConversions.bufferToJson<IAccount>(payload.message.value);
						await this.accountService.createAccount(reqParams);
					} else {
						return;
					}
					
				}
			}
		];
	}
}