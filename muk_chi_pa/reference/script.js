const handleLoadWindow = () => {
    document.querySelector(".document-wrap").style.display = 'flex'
}

const handleClickDocumentWrap = () => {
    document.querySelector(".document-wrap").style.display = 'none'
}

window.addEventListener("load", handleLoadWindow)
window.removeEventListener("unload", handleLoadWindow)

let currentGame = 'rockScissorsPaper' // rockScissorsPaper or mukChiPa
let currentWinner = null;
let computerStatus = null;
let userStatus = null;
let winner = null;
const term = 500;

const rockScissorsPaperKoran = {
    rock: '묵',
    scissors: '찌',
    paper: '빠',
}

const rockScissorsPaperIndex = {
    0: "rock",
    1: "scissors",
    2: "paper",
}

const computerImages = {
    rock: "url('images/computer_rock.png')",
    scissors: "url('images/computer_scissors.png')",
    paper: "url('images/computer_paper.png')",
}

const userImages = {
    rock: "url('images/user_rock.png')",
    scissors: "url('images/user_scissors.png')",
    paper: "url('images/user_paper.png')",
}

const startBtnWrap = document.querySelector('.start-btn-wrap');
const timer = document.querySelector('.timer');
const signalWrap = document.querySelector('.signal-wrap');
const firstSignal = document.querySelector('.first-signal');
const secondSignal = document.querySelector('.second-signal');
const thirdSignal = document.querySelector('.third-signal');
const versusWrap = document.querySelector('.versus-wrap');
const computerStatusImage = document.querySelector('.computer-status-image');
const userStatusImage = document.querySelector('.user-status-image');
const userSelectionWrap = document.querySelector('.user-selection-wrap');
const userRock = document.querySelector('.user-rock');
const userScissors = document.querySelector('.user-scissors');
const userPaper = document.querySelector('.user-paper')
const resultWrap = document.querySelector('.result-wrap')

const delay = (ms, callback) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(callback && callback()), ms);
    })
}

const init = () => {
    currentGame = 'rockScissorsPaper';
    currentWinner = null;
    computerStatus = null;
    userStatus = null;
    computerStatusImage.style.backgroundImage = null;
    userStatusImage.style.backgroundImage = null;
    winner = null;
    signalWrap.style.display = 'flex'
    firstSignal.style.display = 'none'
    secondSignal.style.display = 'none'
    thirdSignal.style.display = 'none'
    firstSignal.innerHTML = '가위'
    secondSignal.innerHTML = '바위'
    thirdSignal.innerHTML = '보!!'
    startBtnWrap.style.display = 'none'
    resultWrap.style.display = 'none'
    versusWrap.style.display = 'none'
    timer.style.display = 'block'
    timer.innerHTML = 3
}

const handleClickStart = async () => {
    init()
    const ms = 2000
    const interval = setInterval(() => {
        timer.innerHTML = timer.innerHTML - 1
    }, ms / 3)
    await delay(ms)
    clearInterval(interval);
    timer.style.display = 'none'
    start();
}

const start = async () => {
    firstSignal.style.display = 'none'
    secondSignal.style.display = 'none'
    thirdSignal.style.display = 'none'
    if (currentWinner === 'user') {
        secondSignal.style.animationDelay = '1.5s'
        thirdSignal.style.animationDelay = '3s'
    } else {
        secondSignal.style.animationDelay = '1s'
        thirdSignal.style.animationDelay = '2s'
    }

    setTimeout(() => {
        firstSignal.style.display = 'inline-block'
        secondSignal.style.display = 'inline-block'
        thirdSignal.style.display = 'inline-block'
    }, 20);
    versusWrap.style.display = 'flex'
    userSelectionWrap.style.display = 'flex'
    compete()
}

const compete = async () => {
    const ms = currentWinner === 'user' ? 3000 : 2000;
    currentWinner === 'user' ? await currentWinnerUser(ms) : await currentWinnerComputer(ms)
    gameLogic();
    if (winner === 'computer') {
        result('defeated')
    } else if (winner === 'user') {
        result('won')
    } else {
        start()
    }
}

const setUserStatus = (selection) => {
    userStatus = selection
    userStatusImage.style.backgroundImage = userImages[selection];
    if (currentGame === 'mukChiPa' && currentWinner === 'user') {
        console.log(rockScissorsPaperKoran[selection])
        thirdSignal.innerHTML = rockScissorsPaperKoran[selection] + '!!'
    }
}

const setComputerStatus = () => {
    computerStatus = rockScissorsPaperIndex[Math.floor(Math.random() * 3)]
    computerStatusImage.style.backgroundImage = computerImages[computerStatus];
    if (currentGame === 'mukChiPa' && currentWinner === 'computer') {
        thirdSignal.innerHTML = rockScissorsPaperKoran[computerStatus] + '!!'
    }
}

const currentWinnerUser = async (ms) => {
    userRock.disabled = false;
    userScissors.disabled = false;
    userPaper.disabled = false;
    await delay(ms);
    userRock.disabled = true;
    userScissors.disabled = true;
    userPaper.disabled = true;
    setComputerStatus();
    await delay(term);
}

const currentWinnerComputer = async (ms) => {
    delay(ms - term, () => {
        userRock.disabled = false;
        userScissors.disabled = false;
        userPaper.disabled = false;
    })
    delay(ms + term, () => {
        userRock.disabled = true;
        userScissors.disabled = true;
        userPaper.disabled = true;
    })
    await delay(ms);
    setComputerStatus();
    await delay(term);
}

const result = (type) => {
    signalWrap.style.display = 'none'
    startBtnWrap.style.display = 'block'
    startBtnWrap.firstElementChild.innerHTML = 'TRY AGAIN?'
    userSelectionWrap.style.display = 'none';
    resultWrap.style.display = 'flex'
    resultWrap.firstElementChild.className = type
}

const gameLogic = () => {
    const rockScissorsPaperObject = {
        rock: {
            rock: null,
            scissors: 'computer',
            paper: 'user',
        },
        scissors: {
            rock: 'user',
            scissors: null,
            paper: 'computer',
        },
        paper: {
            rock: 'computer',
            scissors: 'user',
            paper: null,
        },
    }
    const nextWinner = rockScissorsPaperObject[computerStatus][userStatus]
    if (currentGame === 'rockScissorsPaper') {
        if (nextWinner) {
            currentGame = 'mukChiPa';
            currentWinner = nextWinner
            if (nextWinner === 'computer') {
                firstSignal.innerHTML = rockScissorsPaperKoran[computerStatus]
                secondSignal.innerHTML = rockScissorsPaperKoran[computerStatus]
                thirdSignal.innerHTML = rockScissorsPaperKoran[computerStatus] + '!!'
            } else {
                firstSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                secondSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                thirdSignal.innerHTML = rockScissorsPaperKoran[userStatus] + '!!'
            }
        } else if (nextWinner === null) {
            currentWinner = null;
            computerStatus = null;
            userStatus = null;
            computerStatusImage.style.backgroundImage = null;
            userStatusImage.style.backgroundImage = null;
        } else {
            winner = 'computer'
            return
        }
    } else {
        if (nextWinner === null) {
            winner = currentWinner;
            return
        } else {
            currentWinner = nextWinner
            if (nextWinner === 'computer') {
                firstSignal.innerHTML = rockScissorsPaperKoran[computerStatus]
                secondSignal.innerHTML = rockScissorsPaperKoran[computerStatus]
                thirdSignal.innerHTML = rockScissorsPaperKoran[computerStatus] + '!!'
            } else {
                firstSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                secondSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                thirdSignal.innerHTML = rockScissorsPaperKoran[userStatus] + '!!'
            }
        }
    }
}