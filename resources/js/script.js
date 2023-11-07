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



function sfAdd(numberOfRun){
    numberOfRun += parseInt(scoreTeamA.textContent); 
    scoreTeamA.textContent = numberOfRun;
}

function sfOut(){
    wicketTeamA.textContent += 1;
}

function nzAdd(numberOfRun){
    numberOfRun += parseInt(scoreTeamB.textContent);
    scoreTeamB.textContent = numberOfRun;
}

function nzOut(){
    wicketTeamA.textContent = parseInt(wicketTeamA.textContent) += 1;
}
