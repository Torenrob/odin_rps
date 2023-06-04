let btns = Array.from(document.getElementsByClassName("btns"));
display = document.getElementById("display");
personScoreDisplay = document.getElementById("personScore");
cmptrScoreDisplay = document.getElementById("cmptrScore");
resetBtn = document.getElementById("resetBtn");
displayResult = "";
usrScore = 0;
systemScore = 0;

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
		default:
			return "Error";
	}
}

function getWinner(plyrSelection, cmptrSelection) {
	if (plyrSelection == cmptrSelection) {
		return "Tie";
	} else {
		switch (plyrSelection) {
			case "Rock":
				switch (cmptrSelection) {
					case "Paper":
						return `You lose. ${cmptrSelection} beats ${plyrSelection}.`;
					case "Scissors":
						return `You win! ${plyrSelection} beats ${cmptrSelection}!`;
				}
				break;
			case "Paper":
				switch (cmptrSelection) {
					case "Scissors":
						return `You lose. ${cmptrSelection} beats ${plyrSelection}.`;
					case "Rock":
						return `You win! ${plyrSelection} beats ${cmptrSelection}!`;
				}
				break;
			case "Scissors":
				switch (cmptrSelection) {
					case "Rock":
						return `You lose. ${cmptrSelection} beats ${plyrSelection}.`;
					case "Paper":
						return `You win! ${plyrSelection} beats ${cmptrSelection}!`;
				}
				break;
		}
	}
}

function keepScore(result) {
	if (result.startsWith("You win")) {
		personScoreDisplay.textContent = `You: ${++usrScore}`;
	} else if (result.startsWith("You lose")) {
		cmptrScoreDisplay.textContent = `System: ${++systemScore}`;
	}
}

function bestOf5(userScore, sysScore) {
	let finalDisplay = document.getElementById("finalWinner");
	switch (true) {
		case userScore == 3:
			finalDisplay.innerText = "You won! The best out of 5!";
			break;
		case sysScore == 3:
			finalDisplay.innerText = "You lose. System won best out of 5.";
			break;
	}
}

btns.forEach((item) =>
	item.addEventListener("click", (choice) => {
		displayResult = getWinner(choice.target.id, getComputerChoice());
		display.textContent = displayResult;
		keepScore(displayResult);
		bestOf5(usrScore, systemScore);
	})
);

resetBtn.addEventListener("click", (e) => location.reload());
