export class PeopleService {
	#peoples = [
		{
			lastname: 'Smith',
			firstname: 'Robert',
			band: 'The Cure',
		},
		{
			lastname: 'Idol',
			firstname: 'Billy',
			band: 'Generation X',
		},
		{
			lastname: 'Hagen',
			firstname: 'Nina',
			band: 'Nina Hagen',
		},
		{
			lastname: 'Vicious',
			firstname: 'Sid',
			band: 'Sex Pistols',
		},
	];

	get peoples() {
		return this.#peoples;
	}
}
