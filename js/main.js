
var userInfo = {
    userName: "Player",
    matchNumber: 3,
    matchCount: 1,
};
var winDrawLose = {
    win: 0,
    lose: 0,
    draw: 0,
};
var index;
var comment = document.getElementById("comment");
var rpsNames = ['rock', 'paper', 'scisser'];
var result = document.getElementById("result");



function closeAlert() {
    document.getElementById("alert").style.opacity = "0";
    document.getElementById("alert").style.visibility = "hidden";
    if(document.getElementById("inGameName").value!=0){
        userInfo.userName = document.getElementById("inGameName").value;
    }
    if(document.getElementById("matchNumber").value!=0){
        userInfo.matchNumber = document.getElementById("matchNumber").value;
    }
    document.getElementById("user-table").innerHTML =
            `<td>` + userInfo.userName + `</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.win * 3 + winDrawLose.draw * 1) + `</td>`;
        document.getElementById("computer-table").innerHTML =
            `<td>Computer</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.lose * 3 + winDrawLose.draw * 1) + `</td>`;
}
document.getElementById("rockChoice").addEventListener("click", rockImage);

document.getElementById("paperChoice").addEventListener("click", paperImage);

document.getElementById("scissorChoice").addEventListener("click", scissorImage);



function leaderBoard() {
    if (userInfo.matchCount == userInfo.matchNumber) {
        document.getElementById("user-table").innerHTML =
            `<td>` + userInfo.userName + `</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.win * 3 + winDrawLose.draw * 1) + `</td>`;
        document.getElementById("computer-table").innerHTML =
            `<td>Computer</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.lose * 3 + winDrawLose.draw * 1) + `</td>`;
        if (winDrawLose.win > winDrawLose.lose) {
            result.innerHTML = "🥳Tournament WIN🥳";
        }
        else if (winDrawLose.win < winDrawLose.lose) {
            result.innerHTML = "😭Tournament LOSE😭";
        }
        else{
            result.innerHTML = "🙂Tournament DRAW🙂";
        }
        userInfo.matchCount = 1;
        winDrawLose.win = 0;
        winDrawLose.lose = 0;
        winDrawLose.draw = 0;
    }
    else{
        document.getElementById("user-table").innerHTML =
            `<td>` + userInfo.userName + `</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.win * 3 + winDrawLose.draw * 1) + `</td>`;
        document.getElementById("computer-table").innerHTML =
            `<td>Computer</td><td>` + userInfo.matchNumber + `</td><td>` + winDrawLose.lose + `</td><td>` + winDrawLose.win + `</td><td>` + winDrawLose.draw + `</td><td>` + (winDrawLose.lose * 3 + winDrawLose.draw * 1) + `</td>`;
        userInfo.matchCount++;
        result.innerHTML = "Competition running";
    }
    
}





function rockImage() {

    document.getElementById("user-img").innerHTML = "<img src='images/rock.png'>";
    index = Math.floor(Math.random() * 3);
    document.getElementById("computer-img").innerHTML = "<img src='images/" + rpsNames[index] + ".png'>";
    switch (index) {
        case 0:
            comment.innerHTML = "Its a draw";
            winDrawLose.draw++;
            break;
        case 1:
            comment.innerHTML = "You Lost";
            winDrawLose.lose++;
            break;
        default:
            comment.innerHTML = "You won";
            winDrawLose.win++;

    }
    leaderBoard();
}

function paperImage() {
    document.getElementById("user-img").innerHTML = "<img src='images/paper.png'>";
    index = Math.floor(Math.random() * 3);
    document.getElementById("computer-img").innerHTML = "<img src='images/" + rpsNames[index] + ".png'>";
    switch (index) {
        case 0:
            comment.innerHTML = "You won";
            winDrawLose.win++;
            break;
        case 1:
            comment.innerHTML = "Its a draw";
            winDrawLose.draw++;
            break;
        default:
            comment.innerHTML = "You Lost";
            winDrawLose.lose++;

    }
    leaderBoard();
}
function scissorImage() {
    document.getElementById("user-img").innerHTML = "<img src='images/scisser.png'>";
    index = Math.floor(Math.random() * 3);
    document.getElementById("computer-img").innerHTML = "<img src='images/" + rpsNames[index] + ".png'>";
    switch (index) {
        case 0:
            comment.innerHTML = "You Lost";
            winDrawLose.lose++;
            break;
        case 1:
            comment.innerHTML = "You won";
            winDrawLose.win++;
            break;
        default:
            comment.innerHTML = "Its a draw";
            winDrawLose.draw++;
    }
    leaderBoard();
}


