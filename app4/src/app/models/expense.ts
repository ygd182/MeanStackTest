import { User } from './user';

export class Expense {
	constructor(	
		public category: string,
		public total: number,
		public description: string,
		public user: User,
		public id?: string,
		public uploadDate?: string) {	}
}
