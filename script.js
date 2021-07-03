let doorImage1 = document.querySelector('#door1');
doorImage1.onclick = () => {
  door1.src = openDoor1;
  if(!isClicked(doorImage1);){
  //
  }
  playDoor();
}

let doorImage2 = document.querySelector('#door2');
doorImage2.onclick = () => {
  door2.src = openDoor2;
  if(!isClicked(doorImage2);){
  //
  }
  playDoor();
}

let doorImage3 = document.querySelector('#door3');
doorImage3.onclick = () => {
  door3.src = openDoor3;
  if(!isClicked(doorImage3);){
  // 
  }
  playDoor();
}

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

  numClosedDoors = 3;
  let randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

let openDoor1 = "";
let openDoor2 = "";
let openDoor3 = "";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver();
}

const isClicked = () => {
  if(door.src === closedDoorPath){
    return false;
  }else {
    return true;
  }
}

const startButton = document.querySelector('#start');

const gameOver = (status) => {
  if(status === 'win'){
   startButton.innerHTML = "You win! Play again?";
  }
}


randomChoreDoorGenerator();