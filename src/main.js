class Main {
	#peoples = ["Robert Smith", "Billy Idol", "Nina Hagen", "Sid Vicious"];

	constructor() {
		this.#run();
	}

	#run() {
		const title = document.querySelector("h1");
		title.innerText = "JS";

		// Add an element in the DOM
		const titleLevel2 = document.createElement("h2");
		titleLevel2.innerHTML = "Titre niveau 2";

		// Hook the new DOM Element to an existing lement
		document.body.appendChild(titleLevel2);
		const ul = document.createElement("ul");

		// this > fait référence à l'instance de la classe, à l'objet (pas la classe)
		for (const people of this.#peoples) {
			const li = document.createElement("li");
			// ! not
			// == comparaison valeur et type
			if (people !== "Billy Idol") {
				li.innerText = people;
			} else {
				li.innerHTML = `<strong>${people}</strong>`;
			}

			ul.appendChild(li);
		}
		document.body.appendChild(ul);

        
	}
}

// Self callable function to run the Main class
(function () {
	const app = new Main();
})();
