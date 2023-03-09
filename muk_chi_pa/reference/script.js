let currentGame = 'rockScissorsPaper' // rockScissorsPaper or mukChiPa
let currentWinner = null;
let computerStatus = null;
let userStatus = null;
let winner = null;

const startCount = 3,
    term = 500,
    컴퓨터가이기고있을때라운드시간 = 2000,
    유저가이기고있을때라운드시간 = 3000;

const rockScissorsPaperKoran = {
    rock: '묵',
    scissors: '찌',
    paper: '빠',
},
    rockScissorsPaperIndex = {
        0: "rock",
        1: "scissors",
        2: "paper",
    },
    computerImages = {
        rock: "url('images/computer_rock.png')",
        scissors: "url('images/computer_scissors.png')",
        paper: "url('images/computer_paper.png')",
    },
    userImages = {
        rock: "url('images/user_rock.png')",
        scissors: "url('images/user_scissors.png')",
        paper: "url('images/user_paper.png')",
    };

const startBtnWrap = document.querySelector('.start-btn-wrap'),
    timer = document.querySelector('.timer'),
    signalWrap = document.querySelector('.signal-wrap'),
    firstSignal = document.querySelector('.first-signal'),
    secondSignal = document.querySelector('.second-signal'),
    thirdSignal = document.querySelector('.third-signal'),
    versusWrap = document.querySelector('.versus-wrap'),
    computerStatusImage = document.querySelector('.computer-status-image'),
    userStatusImage = document.querySelector('.user-status-image'),
    userSelectionWrap = document.querySelector('.user-selection-wrap'),
    userRock = document.querySelector('.user-rock'),
    userScissors = document.querySelector('.user-scissors'),
    userPaper = document.querySelector('.user-paper'),
    resultWrap = document.querySelector('.result-wrap');

const handleClickStart = async () => {
    init()
    await startTimer();
    showVersusWrapAndUserSelectionWrap();
    await startRound();
}

const startRound = async () => {
    setUserSelectionButtonDisabled(true)
    setSignal();
    await fight()
}

const fight = async () => {
    currentWinner === 'user' ? await 유저가이기고있을때규칙() : await 컴퓨터가이기고있을때규칙()
    await delay(term);
    mukChiPaRule();
    decideWinner();
}

const decideWinner = () => {
    if (winner === 'computer') {
        showResult('defeated')
    } else if (winner === 'user') {
        showResult('won')
    } else {
        startRound();
    }
}

const showResult = (type) => {
    signalWrap.style.display = 'none'
    startBtnWrap.style.display = 'block'
    startBtnWrap.firstElementChild.innerHTML = 'TRY AGAIN?'
    userSelectionWrap.style.display = 'none';
    resultWrap.style.display = 'flex'
    resultWrap.firstElementChild.className = type
}

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
    timer.innerHTML = startCount
}

const startTimer = async () => {
    const interval = setInterval(() => {
        timer.innerHTML = timer.innerHTML - 1
    }, 1000)
    await delay(startCount * 1000)
    clearInterval(interval);
    timer.style.display = 'none'
}

const showVersusWrapAndUserSelectionWrap = () => {
    versusWrap.style.display = 'flex'
    userSelectionWrap.style.display = 'flex'
}

const setSignal = () => {
    firstSignal.style.display = 'none'
    secondSignal.style.display = 'none'
    thirdSignal.style.display = 'none'
    if (currentWinner === 'user') {
        secondSignal.style.animationDelay = (유저가이기고있을때라운드시간) / 1000 / 2 + 's'
        thirdSignal.style.animationDelay = (유저가이기고있을때라운드시간) / 1000 + 's'
    } else {
        secondSignal.style.animationDelay = (컴퓨터가이기고있을때라운드시간) / 1000 / 2 + 's'
        thirdSignal.style.animationDelay = (컴퓨터가이기고있을때라운드시간) / 1000 + 's'
    }
    setTimeout(() => {
        firstSignal.style.display = 'inline-block'
        secondSignal.style.display = 'inline-block'
        thirdSignal.style.display = 'inline-block'
    }, 20);
}

const 유저가이기고있을때규칙 = async (ms = 유저가이기고있을때라운드시간) => {
    setUserSelectionButtonDisabled(false)
    await delay(ms, setComputerStatus);
}

const 컴퓨터가이기고있을때규칙 = async (ms = 컴퓨터가이기고있을때라운드시간) => {
    await delay(ms - term, () => setUserSelectionButtonDisabled(false))
    await delay(term, setComputerStatus)
}

const mukChiPaRule = () => {
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
            } else {
                firstSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                secondSignal.innerHTML = rockScissorsPaperKoran[userStatus]
                thirdSignal.innerHTML = rockScissorsPaperKoran[userStatus] + '!!'
            }
        }
    }
}

const setUserSelectionButtonDisabled = (boolean) => {
    userRock.disabled = boolean;
    userScissors.disabled = boolean;
    userPaper.disabled = boolean;
}

const setUserStatus = (selection) => {
    userStatus = selection
    userStatusImage.style.backgroundImage = userImages[selection];
    setThirdSignalInnerHtml(userStatus,'user');
}

const setComputerStatus = () => {
    computerStatus = rockScissorsPaperIndex[Math.floor(Math.random() * 3)]
    computerStatusImage.style.backgroundImage = computerImages[computerStatus];
    setThirdSignalInnerHtml(computerStatus,'computer');
}

const setThirdSignalInnerHtml = (status, type) => {
    if (currentGame === 'mukChiPa' && currentWinner === type) {
        thirdSignal.innerHTML = rockScissorsPaperKoran[status] + '!!'
    }
}

const handleLoadWindow = () => {
    document.querySelector(".document-wrap").style.display = 'flex'
}

const handleClickDocumentWrap = () => {
    document.querySelector(".document-wrap").style.display = 'none'
}

window.addEventListener("load", handleLoadWindow)
window.removeEventListener("unload", handleLoadWindow)
