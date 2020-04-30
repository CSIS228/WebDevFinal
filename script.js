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
var currentPlayer = x;
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
   if (currentPlayer == x) {
      currentPlayer = o;
   } else {
      currentPlayer = x;
   }
}

//updates game state based on win condition/turn count
function getGameState() {
   gameStateMessage = "Turn " + turnCount + ": " + currentPlayer.playerName + "'s Turn";
   document.getElementById("message").innerHTML = gameStateMessage;
}

//adds image node to selected box from HTML
function addIcon(box, player) {
   box = String(box);
   var icon = document.createElement("p");
   var textbox = document.createTextNode(player.icon);
   icon.appendChild(textbox);
   document.getElementById(box).appendChild(icon);
}

function createResultWindow(player) {
   var resultWindow = window.open("", "ResultWindow", "width=200, height=100");
   resultWindow.document.write("<p>" + player.playerName + " Wins</p>");
   resultWindow.document.write("<img src='victory_crown.jpg' alt='victory'>");
}

function clickBox(box_id) {
   var box = document.getElementById(String(box_id));
   var gameState = document.getElementById("message");
   try {
      if (box.innerHTML) throw "Please click another box";
      addIcon(box_id, currentPlayer);
   } 
   catch (err) {
      gameState.innerHTML = err;
      incrementPlayer();
   }
   finally {
      incrementPlayer();
      getGameState();
   }
}

//main board update function. should use several helper functions to grab info
function updateBoard() {
   var winCondition = false;
   createEventListeners();
   createPlayers();
   turnCount++;
   getGameState();
   if(winCondition) {
      createResultWindow();
   }
}

//add event listeners here
function createEventListeners() {
   //event handler for group of buttons
   var buttons = document.getElementsByTagName("buttons");
   if(buttons.addEventListener) {
      buttons.addEventListener("click", clickBox, false);
   }
   else if (buttons.attachEvent) {
      buttons.attachEvent("onclick", clickBox);
  }
}

//using this to test functions as they progress for now, will update
//this when project is close to complete
if (window.addEventListener) {
   window.addEventListener("load", updateBoard(), false);
}
else if (window.attachEvent) {
   window.attachEvent("onload", updateBoard());
}