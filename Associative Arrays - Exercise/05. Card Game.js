function cardGame(arr) {
	let players = new Map();

	const values = new Map([
		["2", 2],
		["3", 3],
		["4", 4],
		["5", 5],
		["6", 6],
		["7", 7],
		["8", 8],
		["9", 9],
		["10", 10],
		["J", 11],
		["Q", 12],
		["K", 13],
		["A", 14],
	]);
	const types = new Map([
		["C", 1],
		["D", 2],
		["H", 3],
		["S", 4],
	]);

	//set player names
	for (let el of arr) {
		let name = el.split(": ")[0];
		players.set(name, new Set());
	}

	//give them all the cards
	for (let el of arr) {
		let info = el.split(": ");
		let name = info.shift();
		let cardsArray = info[0].split(", ");
		cardsArray.forEach((card) => {
			players.get(name).add(card);
		});
	}

	//calculate score and print
	for (let player of players) {
		let name = player[0];
		let cards = Array.from(player[1]);
		let score = [];
		cards.forEach((card) => {
			let info = card.split("");
			let type = info.pop();
			let value = info.join("");
			score.push(values.get(value) * types.get(type));
		});
		let totalScore = score.reduce((a, b) => {
			return a + b;
		});
		console.log(`${name}: ${totalScore}`);
	}
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'])