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
var turnCount = 0;
var currentPlayer = "";

//Prompts user in window for a name
function getPlayerName(mode) {
   switch (mode) {
      case "AI":
         x.playerName = window.prompt("Player 1, please enter your name here: ");
         o.playerName = "Computer";
         break;
      case "2P":
         x.playerName = window.prompt("Player 1, please enter your name here: ");
         o.playerName = window.prompt("Player 2, please enter your name here: ");
         break;
      default:
         window.alert("Error");
   }
}

function createPlayers() {
   //create this when method for choosing 2players or Ai is known
   getPlayerName("2P");
}

function incrementTurn() {
   turnCount++;
   if (turnCount % 2 == 0) {
      currentPlayer = o.playerName;
      return currentPlayer;
   }
   currentPlayer = x.playerName;
   return currentPlayer;
}

function updateBoard() {
   //main board update function. should use several helper functions to grab info
   createPlayers();
   for (var turn = 0; turn < 5; turn++) {
      incrementTurn();
      window.alert(currentPlayer);
      incrementTurn();
      window.alert(currentPlayer);
   }
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