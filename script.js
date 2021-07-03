// images for path doors
let botDoorPath = "./Group 14.svg";
let beachDoorPath = "./Group 16.svg";
let spaceDoorPath = "./Group 15.svg";

let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');

doorImage1.onclick = () => {
    door1.src = openDoor1;
    playDoor(openDoor1);
    if(!isClicked(doorImage1)){

    };
}
doorImage2.onclick = () => {
    door2.src = openDoor2;
    playDoor(openDoor2);
    if(!isClicked(doorImage2)){

    };
}
doorImage3.onclick = () => {
    door3.src = openDoor3;
    playDoor(openDoor3);
    if(!isClicked(doorImage3)){

    };
}
let openDoor1 = "";
let openDoor2 = "";
let openDoor3 = "";
const closedDoorPath = "./Group 3.svg";

numClosedDoors = 3;
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

const isBot = (door) => {
    if(door === botDoorPath){
        return true;
      }else {
        return false;
      }
}

 const isClicked = (door) => {
    if(door.src === closedDoorPath){
      return false;
    }else {
      return true;
    }
  }

 const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
        gameOver('win');
    }
    else if (isBot(door) === true){
        gameOver();
    }
 }
 const startButton = document.querySelector('#start-row');
 const gameOver = (status) => {
     if(status === 'win'){
         startButton.innerHTML = "You win! Play again?";
     }else{
         startButton.innerHTML = "Game over! Play again?";
     }
 }

 randomChoreDoorGenerator()


// let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

// ;

// const gameOver = (status) => {
//   if(status === 'win'){
//    startButton.innerHTML = "You win! Play again?";
//   }
// }
