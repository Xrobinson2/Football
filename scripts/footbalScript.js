"use strict";




let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];



const teamList = document.getElementById("teamList")

window.onload = function(){

let teamLength = teams.length
for(let i = 0; i < teamLength; i++ ){
  let theOption = new Option(teams[i].name, teams[i].code)
  teamList.appendChild(theOption);
}

}