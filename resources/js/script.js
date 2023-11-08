let scoreTeamA = document.getElementById("scoreTeamA");
let wicketTeamA = document.getElementById("wicketTeamA");
let sfAdd1 = document.getElementById("sf-add-1");
let sfAdd2 = document.getElementById("sf-add-2");
let sfAdd3 = document.getElementById("sf-add-3");
let sfAdd4 = document.getElementById("sf-add-4");
let sfAdd6 = document.getElementById("sf-add-6");
let sfout = document.getElementById("sf-out");

let scoreTeamB = document.getElementById("scoreTeamB");
let wicketTeamB = document.getElementById("wicketTeamB");
let nzAdd1 = document.getElementById("nz-add-1");
let nzAdd2 = document.getElementById("nz-add-2");
let nzAdd3 = document.getElementById("nz-add-3");
let nzAdd4 = document.getElementById("nz-add-4");
let nzAdd6 = document.getElementById("nz-add-6");
let nzout = document.getElementById("nz-out");

let OverRemaining = document.getElementById("OverRemaining");
let winScoreRequired = document.getElementById("winScoreRequired");
let CRR = document.getElementById("CRR");
let RRR = document.getElementById("RRR");
let currentOver = document.getElementById("currentOver");
let remainingScore = parseInt(wicketTeamA.textContent);

winScoreRequired.textContent = scoreTeamB.textContent;

updateScoreCheck();
updateOver();
updateCRR();
updateRRR();

function sfAdd(numberOfRun){
    numberOfRun += parseInt(scoreTeamA.textContent); 
    scoreTeamA.textContent = numberOfRun;
    updateScoreCheck();
    updateOver();
    updateCRR();
    updateRRR();
}

function sfOut(){
    wicketTeamA.textContent = parseInt(wicketTeamA.textContent) + 1;
}

function nzAdd(numberOfRun){
    numberOfRun += parseInt(scoreTeamB.textContent);
    scoreTeamB.textContent = numberOfRun;
    updateScoreCheck();
    updateOver();
    updateCRR();
    updateRRR();
}

function nzOut(){
    wicketTeamB.textContent = parseInt(wicketTeamB.textContent) + 1;
}

function updateScoreCheck(){
   remainingScore = parseInt(scoreTeamB.textContent) - parseInt(scoreTeamA.textContent) + 1;
   winScoreRequired.textContent = remainingScore; 
}

function updateOver(){
    OverRemaining.textContent = (parseFloat(OverRemaining.textContent) - 0.1).toFixed(1);    
}

function updateCRR(){
    let localCRR = parseInt(scoreTeamA.textContent) / (5 - parseInt(OverRemaining.textContent));
    CRR.textContent = localCRR.toFixed(2);
}

function updateRRR(){
    // 7.1 = 35/4.9;
    //           =  20              / 4
    //           = remaining score / remaining overs 
    console.log("WSR = " + winScoreRequired.textContent);
    console.log("OR = " + OverRemaining.textContent);

    let localRRR = parseInt(winScoreRequired.textContent) / parseFloat(OverRemaining.textContent);
    console.log(localRRR)
    RRR.textContent = localRRR.toFixed(2);


}