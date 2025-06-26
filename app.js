import { question } from "readline-sync";
import { Player } from "./classes/Player.js";
import { Riddle } from "./classes/Riddle.js";
import allRiddles from "./riddles/allRiddles.js";
// import readline from "readline";


const username = question(`Username: `); 
const player = new Player(username);

const loadedRiddles = allRiddles.map(
    r => new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
);

for (const riddle of loadedRiddles) {
    const startTime = Date.now();
    riddle.ask();
    const endTime = Date.now();
    
    const timeTaken = player.recordTime(startTime, endTime)
    console.log(`Your time: ${timeTaken}\n`); 
}
console.clear();
player.showStats();




// async loop
// for (const riddle of loadedRiddles) {
//     console.clear();
//     const record = player.startRecord();
//     await riddle.ask();
//     const levelTime = player.endRecord(record);
//     console.log(`Your time: ${levelTime}\n`);  
// };

// player.showStats();


