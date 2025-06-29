import { Riddle } from "./classes/Riddle.js";
const runQuestions = function (loadedRiddles, player) {

    for (const riddle of loadedRiddles) {
        const startTime = Date.now();
        riddle.ask();
        const endTime = Date.now();
    
        const timeTaken = player.recordTime(startTime, endTime)
        console.log(`Your time: ${timeTaken}\n`); 
    }
}

export {runQuestions}