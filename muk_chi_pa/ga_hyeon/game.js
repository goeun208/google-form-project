var startButton = document.getElementById('main-button');
var npc = document.getElementById('npc');
var comImage = document.getElementById('computer-image');
var userImage = document.getElementById('user-image');
var button0 = document.getElementById('button0');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var comNum, userNum = -1;

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

// 0은 가위, 1은 바위, 2는 보

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
    startButton.style.visibility = "hidden";

    comNum = Math.floor(Math.random()*3);

    const npcList = ["게임을 시작하겠습니다. 3초 동안 가위, 바위, 보 중에 하나를 선택해주세요.",
    "3..",
    "2..",
    "1..",
    "선택 종료!",
    "가위바위보!"
];

    for(let i=0;i<=npcList.length;i++){
        setTimeout(() => {
            if(i===1) userChoice();
            if(i===5) cImg.src = comImageSrc[comNum];
            if(i===6) {
                play(comNum, userNum);
                gameOver();
            } else npc.innerHTML = npcList[i];
        },(i)*1000)
    }

}


// 가위바위보 게임 진행
function play(c, u) {
    if(c===u){
        npc.innerHTML = "비겼습니다.";
    }else{
        switch(c){
            case 0:
                npc.innerHTML = u === 1 ? "당신이 이겼습니다." : "컴퓨터가 이겼습니다.";
                break;
            case 1:
                npc.innerHTML = u === 2 ? "당신이 이겼습니다." : "컴퓨터가 이겼습니다.";
                break;
            case 2:
                npc.innerHTML = u === 0 ? "당신이 이겼습니다." : "컴퓨터가 이겼습니다.";
                break;
        }
    }
    npc.innerHTML += "<br>다시 하고 싶으시면 TRY AGAIN 버튼을 눌러주세요."
}

// 게임이 끝나면 try button 나타남
function gameOver(){
    startButton.className = "try-again";
    startButton.innerHTML = "TRY AGAIN";
    startButton.style.visibility = "visible";
}

/*
가위바위보 버튼 생성
유저가 선택한 버튼에 따라 숫자 반환
하나 선택하면 버튼이 사라지고 선택한 모양이 뜸
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
        console.log(userImageSrc[userNum]);
    }
}

function userChoice() {
    button0.style.visibility = "visible";
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";

    setTimeout(() => {
        button0.style.visibility = "hidden";
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
    },3000);
}