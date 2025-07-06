//imports
import { question } from "readline-sync";
import { Player } from "../classes/Player.js";
import allRiddles from "./allRiddles.js";
import { loadRiddles } from "./riddleServ.js";
import { runQuestions } from "./gameServ.js";
//import readline from "readline";

//Run default game (All riddles infinite fails)
export const regularGame = function(){
    const username = question(`Username: `);
    const player = new Player(username);
    
    const loadedRiddles = loadRiddles(allRiddles);
    
    runQuestions(loadedRiddles, player);
    
    console.clear();
    player.showStats();
}

// async loop (try somthing)
// for (const riddle of loadedRiddles) {
//     console.clear();
//     const record = player.startRecord();
//     await riddle.ask();
//     const levelTime = player.endRecord(record);
//     console.log(`Your time: ${levelTime}\n`);
// };

// player.showStats();