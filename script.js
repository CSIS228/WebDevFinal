//   Final Project

//   Author: Ashley D, Alex F, and Matthew K
//   Date:   4-15-2020

//   Filename: script.js

"use strict";

//global player variables which hold player number, name, and icon
var x = {
   player: 1,
   playerName: "",
   icon: "X"
};
var o = {
   player: 2,
   playerName: "",
   icon: "O"
};

//main global variables
var turnCount = 0;
var currentPlayer;
var gameStateMessage;

//Prompts user in window for a name using switch statement
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

//uses event handlers to create the players
function createPlayers() {
   //create this when method for choosing 2players or Ai is known
   getPlayerName("2P");
}

//swaps current player
function incrementPlayer() {
   if (currentPlayer == x.playerName) {
      currentPlayer = o.playerName;
   } else {
      currentPlayer = x.playerName;
   }
}

//updates game state based on win condition/turn count
function getGameState() {
   gameStateMessage = "Turn " + turnCount + ": " + currentPlayer + "'s Turn";
}

//main game logic. creates players, increments turns, and updates game state
function playGame(rounds) {
   createPlayers();
   var limit = 0;
   while (limit < rounds) {
      turnCount++;
      incrementPlayer();
      getGameState();
      window.alert(gameStateMessage);
      incrementPlayer();
      getGameState();
      window.alert(gameStateMessage);
      limit++;
   }
}

//adds image node to selected box from HTML
function addIcon(box, player) {
   box = String(box);
   var icon = document.createElement("p");
   var textbox = document.createTextNode(player.icon);
   icon.appendChild(textbox);
   document.getElementById(box).appendChild(icon);
}

function updateBoard() {
   //main board update function. should use several helper functions to grab info
   // playGame(5);
   addImage(1, x);
   addImage(2, o);
   addImage(3, x);

   resizeImages();
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