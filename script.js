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

// current board state
var board = [
	" ", " ", " ",
	" ", " ", " ",
	" ", " ", " "
];

// array of winning positions 
var winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

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
   gameStateMessage = currentPlayer.playerName + "'s Turn";
   document.getElementById("message").innerHTML = gameStateMessage;
}

//adds image node to selected box from HTML
function addIcon(box, player) {
	// add player icon to board array
    board[box] = player.icon;
	
	// add player icon to screen
    box = String(box);
    var icon = document.createElement("p");
    var textbox = document.createTextNode(player.icon);
    icon.appendChild(textbox);
    document.getElementById(box).appendChild(icon);
   
   
}

function createResultWindow(player) {
   var resultWindow = window.open("", "ResultWindow", "width=350, height=350");
   resultWindow.document.write("<p>" + currentPlayer.playerName + " Wins!!!</p>");
   resultWindow.document.write("<img src='victory_crown.jpg' alt='victory'>");
}

function clickBox(box_id) {
	// TODO: if mode is against computer, don't allow clickBox() to be ran out of turn
	
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
	// check for winning combos
	 if(checkForWin()) {
	     createResultWindow();
	     //reset();
	 }
       incrementPlayer();
       getGameState();
   }
}

// checks for win
function checkForWin(){
	for (var i = 0; i < 8; i++){
		// use temporary variables for easier reading
		var a = board[winningCombos[i][0]];
		var b = board[winningCombos[i][1]];
		var c = board[winningCombos[i][2]];
		
		// make sure spaces are not empty
		if (a === " " || b === " " || c === " ")
		{
			continue;
		}
		
		// compare board status to winning combos
		if (a === b && a === c){
			return true;
		}
	}
	// return false if no win is detected
	return false;
}

// resets game
function reset() {
	location.reload();
}

// sets up board
function setUpBoard() {
   createEventListeners();
   createPlayers();
   
   turnCount++;
   getGameState();
}

//add event listeners here
function createEventListeners() {
    //event handler for group of buttons
    var buttons = new Array();
	
	// reset button
	var resetButton = document.getElementById("reset");
	if (resetButton.addEventListener) {
	    resetButton.addEventListener("click", reset, false);
    }
    else if (buttons[0].attachEvent) {
		resetButton.attachEvent("onclick", reset);
	}
	
    // add button 0
    buttons.push(document.getElementById(String(0)));
    if (buttons[0].addEventListener) {
	    buttons[0].addEventListener("click", function (){clickBox(0);}, false);
    }
    else if (buttons[0].attachEvent) {
		buttons[0].attachEvent("onclick", function (){clickBox(0);});
	}
  
    // add button 1
    buttons.push(document.getElementById(String(1)));
    if (buttons[1].addEventListener) {
	    buttons[1].addEventListener("click", function (){clickBox(1);}, false); 
    }
    else if (buttons[1].attachEvent) {
		buttons[1].attachEvent("onclick", function (){clickBox(1);}); 
	}
	
    // add button 2
    buttons.push(document.getElementById(String(2)));
    if (buttons[2].addEventListener) {
	    buttons[2].addEventListener("click", function (){clickBox(2);}, false); 
    }
    else if (buttons[2].attachEvent) {
		buttons[2].attachEvent("onclick", function (){clickBox(2);});
	}
  
    // add button 3
    buttons.push(document.getElementById(String(3)));
    if (buttons[3].addEventListener) {
	    buttons[3].addEventListener("click", function (){clickBox(3);}, false); 
    }
    else if (buttons[3].attachEvent) {
		buttons[3].attachEvent("onclick", function (){clickBox(3);}); 
	}
	
    // add button 4
    buttons.push(document.getElementById(String(4)));
    if (buttons[4].addEventListener) {
	    buttons[4].addEventListener("click", function (){clickBox(4);}, false);
    }
    else if (buttons[4].attachEvent) {
		buttons[4].attachEvent("onclick", function (){clickBox(4);}); 
	}
	
    // add button 5
    buttons.push(document.getElementById(String(5)));
    if (buttons[5].addEventListener) {
	    buttons[5].addEventListener("click", function (){clickBox(5);}, false); 
    }
    else if (buttons[5].attachEvent) {
		buttons[5].attachEvent("onclick", function (){clickBox(5);}); 
	}
	
    // add button 6
    buttons.push(document.getElementById(String(6)));
    if (buttons[6].addEventListener) {
	    buttons[6].addEventListener("click", function (){clickBox(6);}, false); 
    }
    else if (buttons[6].attachEvent) {
		buttons[6].attachEvent("onclick", function (){clickBox(6);}); 
	}
	
    // add button 7
    buttons.push(document.getElementById(String(7)));
    if (buttons[7].addEventListener) {
	    buttons[7].addEventListener("click", function (){clickBox(7);}, false); 
    }
    else if (buttons[7].attachEvent) {
		buttons[7].attachEvent("onclick", function (){clickBox(7);}); 
	}
	
    // add button 8
    buttons.push(document.getElementById(String(8)));
    if (buttons[8].addEventListener) {
	    buttons[8].addEventListener("click", function (){clickBox(8);}, false); 
    }
    else if (buttons[8].attachEvent) {
		buttons[8].attachEvent("onclick", function (){clickBox(8);}); 
	}
}

//using this to test functions as they progress for now, will update
//this when project is close to complete
if (window.addEventListener) {
   window.addEventListener("load", setUpBoard(), false);
}
else if (window.attachEvent) {
   window.attachEvent("onload", setUpBoard());
}
