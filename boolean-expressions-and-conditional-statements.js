/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in your program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go toward the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("As you start to climb the mountain you see a cave to your right but farther up you see a light.");
  const mountChoice1 = readline.question("Do you go to the 'cave' or the 'light'? ");
  if (mountChoice1 === "cave") {
    console.log("As you get to the cave you see a box.");
    const cave1 = readline.question("Do you open the box? 'yes' or 'no': ");
    if (cave1 === "yes" && hasTorch) {
        console.log("You shine the light into the cave and see a sleeping bear. You decide to turn back.");
    } else if (cave1 === "no" || !hasTorch) {
        console.log("As you enter the cave you see a sword and a bow and arrows. You pick both up.");
        const resume = readline.question("Press Enter to continue...");
        console.log("A bear attacks you!");
        const cave2 = readline.question("Do you fight back with the 'sword' or the 'bow'? ");
        if (cave2 === "sword"){
            console.log("You kill the bear! You then wake up to find that this has all been a dream. CONGRATULATIONS!");
        } else if (cave2 === "bow") {
            console.log("You did not get a shot off! You have become dinner for the bear! TRY AGAIN!");
        }
    }
  }
  if (mountChoice1 === "light") {
    console.log("As you approach the light you see an old man by a fire. He asks if you will give him your shoes.");
    const light = readline.question("Do you give him your shoes? 'yes' or 'no' ");
    if (light === 'yes') {
        console.log("He thanks you and gives you the keys to his truck with a GPS to fing your way home. CONGRATULATIONS!");
    }
    else if (light === 'no'){
        console.log("He tells you to leave and you end up lost and wandering aimlessly. TRY AGAIN!");
    }
  }
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/