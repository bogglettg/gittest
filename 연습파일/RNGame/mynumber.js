const myInputNumber = document.querySelector("#my-number input");
const gameForm = document.querySelector("#game-form");
const totalNumberInput = document.querySelector("#total-number input");
const result = document.querySelector("#result");
const finalResult = document.querySelector("final-result");

function onGameSubmit(event) {
    event.preventDefault();
    const myValue = parseInt(Math.abs(myInputNumber.value));
    const TotalValue = parseInt(Math.abs(totalNumberInput.value));
    const resultText = result;
    const randomNumber = Math.ceil(Math.abs(Math.random() * TotalValue));
    const fResult = finalResult;

    if (TotalValue < myValue) {
        result.innerText =
            "check your total number. guessed number cannot be more than total number. ";
    } else {
        resultText.innerText = "you chose: " + myValue + ", the machine chose: " + randomNumber;
        if (myValue === randomNumber) {
            document.getElementById("final-result").innerHTML = "you won";
        } else {
            document.getElementById("final-result").innerHTML = "you lose";
        }
    }
}

gameForm.addEventListener("submit", onGameSubmit);
