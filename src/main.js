import { TemplateLoader } from './_helpers/template-loader';
class Main {
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

	constructor() {
		this.#run();
	}

	#run() {
		const title = document.querySelector('h1');
		title.innerText = 'JS';

		// Add an element in the DOM
		const titleLevel2 = document.createElement('h2');
		titleLevel2.innerHTML = 'Titre niveau 2';

		// Hook the new DOM Element to an existing element
		document.body.appendChild(titleLevel2);
		const ul = document.createElement('ul');

		// this > fait référence à l'instance de la classe, à l'objet (pas la classe)
		this.#peoples.forEach((people) => {
			const li = document.createElement('li');
			// ! not
			// == comparaison valeur et type
			if (people.firstname + ' ' + people.lastname !== 'Billy Idol') {
				li.innerText = people.firstname + ' ' + people.lastname;
			} else {
				li.innerHTML = `<strong>${
					people.firstname + ' ' + people.lastname
				}</strong>`;
			}
			ul.appendChild(li);
		});
		document.body.appendChild(ul);

		// TODO : faire un tableau qui affiche les données du tableau peoples

		/*
		// code fonctionnel de Vichet
		for (const person of this.#peoples) {
			const tr = document.createElement("tr");
			const lastname = document.createElement("td");
			const firstname = document.createElement("td");
			const band = document.createElement("td");

			lastname.innerText = person.lastname;

			firstname.innerText = person.firstname;
			band.innerText = person.band;

			tr.appendChild(lastname);
			tr.appendChild(firstname);
			tr.appendChild(band);
			document.querySelector("tbody").appendChild(tr);
		}
		*/

		// Loop over people and feed rows
		// Selectionne le premier élément avec la balise tbody
		const tbody = document.querySelector('tbody');

		for (const people of this.#peoples) {
			// Create a row for each people
			const tr = document.createElement('tr');

			// Add a td for the future checkbox using a static method
			tr.appendChild(Main.#makeCheckboxTd());

			// Try to traverse the People object
			for (const property in people) {
				const td = document.createElement('td');
				td.innerText = people[property];
				tr.appendChild(td);
			}

			// Append tr to tbody
			tbody.appendChild(tr);
		}
	}

	// static permet de définir une methode statique d'une classe
	// Methode applicable à la classe (pas à l'objet)
	static #makeCheckboxTd() {
		const td = document.createElement('td');
		const templateLoader = new TemplateLoader('item-checkbox');
		try {
			const checkbox = templateLoader.loadTemplate();
			td.appendChild(checkbox);
		} catch (e) {
			td.innerHTML = '&nbsp;';
		}
		// si ça ne marche pas > il y aura rien, l'appli ne va pas crash ni afficher une tartine de message d'erreur
		return td;
	}
}

// Self callable function to run the Main class
(function () {
	const app = new Main();
})();

// Event listener for the main checkbox
document.getElementById('main-checkbox').addEventListener('click', (event) => {
	const checkbox = event.target;
	if (checkbox.checked) {
		console.log('Have to ckeck all lines');
	} else {
		console.log('Have to unckeck all lines');
	}
});
