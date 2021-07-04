// images for path doors
let door1 = document.querySelector('#door1');
let door2 = document.querySelector('#door2');
let door3 = document.querySelector('#door3');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;
let startButton = document.querySelector('#start-row');

const isClicked = (door) => {
    if(door.src === closedDoorPath){
      return false;
    } else {
      return true;
    }
  }

const isBot = (door) => {
    if(door.src === botDoorPath){
        return true;
    } else {
        return false;
    }
}

 const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
        gameOver('win');
    } else if (isBot(door)){
        gameOver();
    }
 }
// generator automatically picks a value of 0,1,2
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }else if(choreDoor === 2){
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
 }
// door events
 door1.onclick = () => {
   if(currentlyPlaying && !isClicked(door1)){
        door1.src = openDoor1;
        playDoor(door1);
    };
}
door2.onclick = () => {
    if(currentlyPlaying && !isClicked(door2)){
        door2.src = openDoor2;
        playDoor(door2);
    };
}
door3.onclick = () => {
    if(currentlyPlaying && !isClicked(door3)){
        door3.src = openDoor3;
        playDoor(door3);
    };
} 
startButton.onclick = () => {
    startRound();
}
// reset after each round
const startRound = () => {   
    currentlyPlaying = true;
    numClosedDoors = 3;
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    startButton.innerHTML = "Good luck!";
    randomChoreDoorGenerator();
} // game over function
 const gameOver = (status) => {
    if(status === 'win'){
    startButton.innerHTML = "You win! Play again?";
    } else {
    startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}




startRound();


