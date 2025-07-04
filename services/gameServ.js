//Take riddles and player and ask the player questions
const runQuestions = function (loadedRiddles, player) {
    for (const riddle of loadedRiddles) {
        const timeTaken = TimeMeasurement(() => riddle.ask(), player);
        console.log(`Your time: ${timeTaken}\n`); 
    }
}

//Measurement the time taken to player finish the level (riddle)
const TimeMeasurement = function(callback, player){
    const startTime = Date.now();
    callback();
    const endTime = Date.now();

    const timeTaken = player.recordTime(startTime, endTime)
    return timeTaken;
}

export {runQuestions}


