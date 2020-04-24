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
var currentPlayer;
var gameStateMessage;

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

function incrementPlayer() {
   if (currentPlayer == x.playerName) {
      currentPlayer = o.playerName;
   } else {
      currentPlayer = x.playerName;
   }
}

function getGameState() {
   gameStateMessage = "Turn " + turnCount + ": " + currentPlayer + "'s Turn";
}

function playGame(rounds) {
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

function updateBoard() {
   //main board update function. should use several helper functions to grab info
   createPlayers();
   playGame(5);
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