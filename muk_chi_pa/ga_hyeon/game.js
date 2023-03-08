var startButton = document.getElementById('main-button');
var npc = document.getElementById('npc');
var userName = document.getElementById('user-name');
var comName = document.getElementById('computer-name');
var comImage = document.getElementById('computer-image');
var userImage = document.getElementById('user-image');
var button0 = document.getElementById('button0');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var comNum, userNum = -1;
// user가 가위바위보에서 이긴 상태면 1, 아니면 0으로 표시
var isUserWin;

// 0은 가위, 1은 바위, 2는 보
const rockScissorsPaper = ['가위','바위','보'];
const comImageSrc = [
    "images/computer_scissors.png",
    "images/computer_rock.png",
    "images/computer_paper.png"
];
const userImageSrc = [
    "images/user_scissors.png",
    "images/user_rock.png",
    "images/user_paper.png"
];
const gameOverImageSrc = [
    "images/win.png",
    "images/defeat.png"
];

var cImg = document.createElement('img');
cImg.src = gameOverImageSrc[0];
cImg.alt = "computer image";
comImage.appendChild(cImg);

var uImg = document.createElement('img');
uImg.src = gameOverImageSrc[0];
uImg.alt = "user image";
userImage.appendChild(uImg);

addUserClickEvent();

startButton.onclick = () => {
    cImg.src = gameOverImageSrc[0];
    uImg.src = gameOverImageSrc[0];
    userNum = -1;

    startButton.style.visibility = "hidden";

    const npcList = [
        "3초 동안 가위, 바위, 보 중에 하나를 선택해주세요.",
        "3..",
        "2..",
        "1..",
        "선택 종료!",
        "가위 바위 보!"
    ];

    for(let i=0;i<=npcList.length;i++){
        setTimeout(() => {
            if(i===1) userChoice();
            if(i===5) cImg.src = comImageSrc[comNum];
            if(i===6) {
                if(userNum!==-1)play(comNum, userNum);
                else {
                    npc.innerHTML = "가위바위보를 선택하지 않아 게임을 종료합니다.<br>다시 하고 싶으시면 TRY AGAIN 버튼을 눌러주세요.";
                    gameOver();
                }
            } else npc.innerHTML = npcList[i];
        },(i+1)*1000)
    }

}


// 가위바위보 게임 진행
function play(c, u) {
    if(c===u){
        npc.innerHTML = "비겼습니다.<br>가위바위보를 다시 진행하겠습니다.";
        startButton.onclick();
    }else{
        switch(c){
            case 0:
                if(u===1){
                    npc.innerHTML = "당신이 이겼습니다.";
                    isUserWin = 1;
                } else {
                    npc.innerHTML = "컴퓨터가 이겼습니다.";
                    isUserWin = 0;
                }
                break;
            case 1:
                if(u===2){
                    npc.innerHTML = "당신이 이겼습니다.";
                    isUserWin = 1;
                } else {
                    npc.innerHTML = "컴퓨터가 이겼습니다.";
                    isUserWin = 0;
                }
                break;
            case 2:
                if(u===0){
                    npc.innerHTML = "당신이 이겼습니다.";
                    isUserWin = 1;
                } else {
                    npc.innerHTML = "컴퓨터가 이겼습니다.";
                    isUserWin = 0;
                }
                break;
        }

        if(isUserWin){
            userName.className = "win";
            comName.className = "";
        } else{
            comName.className = "win";
            userName.className = "";
        }

        npc.innerHTML += "<br>이어서 묵찌빠를 진행하겠습니다.";

        const npcList = [
            "3초 동안 가위, 바위, 보 중에 하나를 선택해주세요.",
            "3..",
            "2..",
            "1..",
            "선택 종료!",
            "묵 찌 빠!"
        ];

        for(let i=0;i<=npcList.length;i++){
            setTimeout(() => {
                if(i===1) userChoice();
                if(i===5) cImg.src = comImageSrc[comNum];
                if(i===6) {
                    play2(comNum, userNum);
                } else npc.innerHTML = npcList[i];
            },(i+2)*1000)
        }
    }
}

/* 
묵찌빠 게임 진행
c == u이면, 공격이 승리함
아니면 공격을 갱신하고 묵찌빠 다시 진행함
*/
function play2(c, u) {
    if(c===u){
        npc.innerHTML = isUserWin ? "당신이 최종승리했습니다." : "컴퓨터가 최종승리했습니다.";
        npc.innerHTML += "<br>다시 하고 싶으시면 TRY AGAIN 버튼을 눌러주세요.";
        gameOver();
    }else{
        npc.innerHTML = isUserWin ? "당신이 공격에 실패했습니다. 묵찌빠를 다시 진행합니다." : "컴퓨터가 공격에 실패했습니다. 묵찌빠를 다시 진행합니다.";

        switch(c){
            case 0:
                if(u===1){
                    isUserWin = 1;
                } else {
                    isUserWin = 0;
                }
                break;
            case 1:
                if(u===2){
                    isUserWin = 1;
                } else {
                    isUserWin = 0;
                }
                break;
            case 2:
                if(u===0){
                    isUserWin = 1;
                } else {
                    isUserWin = 0;
                }
                break;
        }

        if(isUserWin){
            userName.className = "win";
            comName.className = "";
        } else{
            comName.className = "win";
            userName.className = "";
        }

        const npcList = [
            "3초 동안 가위, 바위, 보 중에 하나를 선택해주세요.",
            "3..",
            "2..",
            "1..",
            "선택 종료!",
            "묵 찌 빠!"
        ];

        for(let i=0;i<=npcList.length;i++){
            setTimeout(() => {
                if(i===1) userChoice();
                if(i===5) cImg.src = comImageSrc[comNum];
                if(i===6) {
                    play2(comNum, userNum);
                } else npc.innerHTML = npcList[i];
            },(i+2)*1000)
        }
    }
}

// 게임이 끝나면 try button 나타남
function gameOver(){
    startButton.className = "try-again";
    startButton.innerHTML = "TRY AGAIN";
    startButton.style.visibility = "visible";

    userName.className = "";
    comName.className = "";

}

/*
가위바위보 버튼 생성
*/
function addUserClickEvent() {
    button0.onclick = () => {
        userNum = 0;
        uImg.src =  userImageSrc[userNum];
    }
    button1.onclick = () => {
        userNum = 1;
        uImg.src =  userImageSrc[userNum];
    }
    button2.onclick = () => {
        userNum = 2;
        uImg.src =  userImageSrc[userNum];
    }
}

function userChoice() {
    comNum = Math.floor(Math.random()*3);

    button0.style.visibility = "visible";
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";

    setTimeout(() => {
        button0.style.visibility = "hidden";
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
    },3000);
}