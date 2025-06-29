import { question } from "readline-sync";
import { Player } from "./classes/Player.js";
import { Riddle } from "./classes/Riddle.js";
import allRiddles from "./riddles/allRiddles.js";
import { loadRiddles } from "./riddleManger.js";
import { runQuestions } from "./gameManger.js";
// import readline from "readline";

const username = question(`Username: `);
const player = new Player(username);

const loadedRiddles = loadRiddles(allRiddles);
console.log(loadRiddles);

runQuestions(loadedRiddles, player)

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


