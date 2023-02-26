//list of features to build:
    // 2. have JS display the world     DONE
    // 2. have pacman move up and down     


var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2],
    [2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
    [3,3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3],
    [3,3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3],
    [2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,0,2,2,2,2,2,2,2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,0,2,0,0,0,0,0,2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,0,2,0,0,0,0,0,2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,0,2,2,2,0,2,2,2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2],
    [2,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2],
    [2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
    [3,3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3],
    [3,3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3],
    [2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

var score = 0;

var pacman = {
    x: 11,
    y: 21
};

var redGhost = {
    x: 10,
    y: 11
};

var orangeGhost = {
    x: 12,
    y: 11
};

var pinkGhost = {
    x: 11,
    y: 11
};

function displayWorld() {
    var output = "";
    
    for(var i=0; i<world.length; i++)   {
        output += "\n<div class='row'>";
        for(var j=0; j<world[i].length; j++)   {
            if(world[i][j] == 2)    {
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] == 1)    {
                output += "<div class='coin'></div>";
            }
            else if (world[i][j] == 0)    {
                output += "<div class='empty'></div>";
            }
            else if (world[i][j] == 3)    {
                output += "<div class='out-of-game'></div>";
            }
            else if (world[i][j] == 4)    {
                output += "<div class='cherry'></div>";
            }
        }
        output += "\n</div>"
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

displayWorld();
displayPacman();
displayOrangeGhost();
displayRedGhost();
displayPinkGhost();
displayScore();

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}

function displayRedGhost() {
    document.getElementById('red-ghost').style.top = redGhost.y*20 + "px";
    document.getElementById('red-ghost').style.left = redGhost.x*20 + "px";
}

function displayOrangeGhost() {
    document.getElementById('orange-ghost').style.top = orangeGhost.y*20 + "px";
    document.getElementById('orange-ghost').style.left = orangeGhost.x*20 + "px";
}

function displayPinkGhost() {
    document.getElementById('pink-ghost').style.top = pinkGhost.y*20 + "px";
    document.getElementById('pink-ghost').style.left = pinkGhost.x*20 + "px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function pacmanMove(e) {
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {//left
        pacman.x --;
        document.getElementById('pacman').style.transform = 'rotate(180deg)';
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2)    {
        pacman.y --;
        document.getElementById('pacman').style.transform = 'rotate(-90deg)';
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2)    {
        pacman.x ++;
        document.getElementById('pacman').style.transform = 'rotate(0deg)';
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2)    {
        pacman.y ++;
        document.getElementById('pacman').style.transform = 'rotate(90deg)';
    }
    if(world[pacman.y][pacman.x] == 1)  {
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x] == 4)  {
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    // if(world[pacman.y][pacman.x] == world[redGhost.y][redGhost.x])  {
    //     document.getElementById('pacman').remove();
    //     displayRedGhost();
    //     displayPacman();
    // }
    displayPacman();
}

function logKeyCode(e) {
    console.log(e.keyCode);
}

addEventListener("keydown", pacmanMove);