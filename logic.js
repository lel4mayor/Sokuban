const map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
  ];

const delta = 25;

var player = document.getElementById("playerPosition");
var playerRow;
var playerCol;



// setting up maze
//
//-----------------------------------------------------------------------------
console.log(map);

for ( i = 0; i < map.length; i++ ) {
    for ( x = 0; x < map[i].length; x++ ) {
        
        if ( map[i][x] === "W") {
            var wallCell = document.createElement("div");
            wallCell.setAttribute("id", "wallCell");
            document.body.appendChild(wallCell);
            
        } else if ( map[i][x] === " ") {
            var floorCell = document.createElement("div");
            floorCell.setAttribute("id", "floorCell")
            document.body.appendChild(floorCell);
            
       } else if ( map[i][x] === "S") {
            var startCell = document.createElement("div");
            startCell.setAttribute("id", "startCell");
            document.body.appendChild(startCell);
            playerCol = x;
            playerRow = i;
        } else if ( map[i][x] === "O") {
            var openCell = document.createElement("div");
            openCell.setAttribute("id", "openCell");
            document.body.appendChild(openCell);
        } else if ( map[i][x] === "B") {
            var box = document.createElement("div");
            box.setAttribute("id", "box");
            document.body.appendChild(box);
        } else if ( map[i][x] === "X") {
            var closedCell = document.createElement("div");
            closedCell.setAttribute("id", "closedCell");
            document.body.appendChild(closedCell);
        }
    }
};


// player position & moves
//
//-----------------------------------------------------------------------------

function movePlayer(x,y) {
    var moveRow = playerRow + x;
    var moveCol = playerCol + y;
    var destCell = map[moveRow][moveCol];

    if (destCell && destCell !== "W") {
        playerRow += x;
        playerCol += y;
        console.log("You moved");
        playerCoord();
        if (destCell ==="F") {
            youWin();
        }
    } else {
        console.log("You hit a wall");
    }
}

function playerCoord() {
    player.style.top = (playerRow * delta) + 9 + "px";
    player.style.left = (playerCol * delta) + 9 + "px";
}

function youWin() {
    alert("You Win!")
}

movePlayer(0,0);
