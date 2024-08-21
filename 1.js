for (let i = 0; i < 9; i++) {
  const box = document.createElement("div");
  box.style.width = "13.3vw";
  box.style.height = "13vw";
  box.style.backgroundImage = "url('./pipe.png')";
  box.style.backgroundSize = "cover";
  box.id = i.toString();
  document.getElementsByClassName("soil")[0].appendChild(box);
}
const mole = document.createElement("img");
mole.src = "./monty-mole.png";
mole.style.width = "8vw";
mole.style.height = "8vw";
mole.style.marginLeft = "2.5vw";
mole.style.cursor = "pointer";


val1 = setInterval(mole1, 1000);

function mole1() {
  document.getElementById(Math.floor(Math.random() * 9)).appendChild(mole);
}

const plant = document.createElement("img");
plant.src = "./piranha-plant.png";
plant.style.width = "8vw";
plant.style.height = "8vw";
plant.style.marginLeft = "2.5vw";
plant.style.marginTop = "-0.5vw";
plant.style.cursor = "pointer";

Val = setInterval(plant1, 1000);

function plant1() {
  document.getElementById(Math.floor(Math.random() * 9)).appendChild(plant);
}
const point = document.getElementById("score");
let result = 0;

function moleclick() {
  result += 10;
  point.innerHTML = result;
}

function plantclick() {
  point.innerHTML = `GAME OVER... : ${result}`;
  clearInterval(Val);
  clearInterval(val1);
}
plant.onclick = plantclick;
mole.onclick = moleclick;


