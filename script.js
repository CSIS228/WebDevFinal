//   Final Project

//   Author: Ashley D, Alex F, and Matthew K
//   Date:   4-15-2020

//   Filename: script.js

"use strict";

//global player variables which hold player number, name, and icon
var x = {
   player: 1,
   playerName: "",
   //HTML doesn't have an image object yet, will implement this later
   // icon: document.getElementById("img").getAttribute("src")
};

var o = {
   player: 2,
   playerName: "",
   //HTML doesn't have an image object yet, will implement this later
   // icon: document.getElementById("img").getAttribute("src")
};

//Prompts user in window for a name
function getPlayerName(player) {
   player.playerName = window.prompt("Please enter your name here:");
}

function createPlayers() {
   //create this when method for choosing 2players or Ai is known
   getPlayerName(x);
   getPlayerName(o);
}

function updateBoard() {
   //main board update function. should use several helper functions to grab info
   createPlayers();
   window.alert(x.playerName);
   window.alert(o.playerName);
}

function createEventListeners() {
   //add event listeners here
}

//using this to test functions as they progress for now, will update
//this when project is close to complete
if (window.addEventListener) {
   window.addEventListener("load", updateBoard(), false);
}
else if (window.attachEvent) {
   window.attachEvent("onload", updateBoard());
}