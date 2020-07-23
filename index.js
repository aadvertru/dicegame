let actualPlayerNumber = 1;
let player1Score = 0;
let player2Score = 0;
const min = 1;
const max = 6;
const maxScore = 20;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function initialState() {
    document.getElementById('actualPlayerNumber').textContent = '';
    document.getElementById('player1Dice').textContent = '-';
    document.getElementById('player2Dice').textContent = '-';
    document.getElementById('player1Dice').classList.remove('active')
    document.getElementById('player2Dice').classList.remove('active')
}

function reloadPage() {
    window.location.reload();
}

function rollDice() {
    initialState();
    let thisTurnDice = randomInteger(min, max);
    let score = 0;
    let winFlag = 0;

    if (actualPlayerNumber === 1) {
        score = player1Score + thisTurnDice;
        score === 1 ? winFlag = 2 : winFlag = 0;
        score >= maxScore ? winFlag = 1 : player1Score = player1Score + thisTurnDice;
    } else {
        score = player2Score + thisTurnDice;
        score === 1 ? winFlag = 1 : winFlag = 0;
        score >= maxScore ? winFlag = 2 : player2Score = player2Score + thisTurnDice;
    }
    document.getElementById('actualPlayerNumber').textContent = actualPlayerNumber;
    document.getElementById('player' + actualPlayerNumber + 'Dice').textContent = thisTurnDice.toString();
    document.getElementById('player' + actualPlayerNumber + 'Dice').classList.add('active');
    document.getElementById('player' + actualPlayerNumber + 'Score').textContent = score.toString();

    actualPlayerNumber = actualPlayerNumber === 1 ? 2 : 1;
    if (winFlag !== 0) {
        document.getElementById('btnRoll').style.backgroundColor = '#ccc';
        document.getElementById('btnRoll').setAttribute('disabled', 'disabled');
        document.getElementById('startNewGame').style.display = 'inline-block';
        alert('player' + winFlag + 'win!');
    }

}

document.getElementById('btnRoll').addEventListener('click', rollDice);
document.getElementById('startNewGame').addEventListener('click', reloadPage);