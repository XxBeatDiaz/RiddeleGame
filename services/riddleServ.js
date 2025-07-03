//imports
import { ChoiceRidle } from "../classes/ChoiceRidle.js";
import { Riddle } from "../classes/Riddle.js";

//Convert all obj riddles and load to an instances
export const loadRiddles = function (riddles) {
    const loadedRiddles = riddles.map((r) => {
        if (r.type === "regular") {
            return new Riddle(r)
        }
        else if (r.type === "choices") {
            return new ChoiceRidle(r, r.choices)
        }
    });
    return loadedRiddles;
}

//Load by difficulty level
export const loadByDifficulty = function (riddles, difficultyChosen) {
    const byDiffArr = riddles.filter(r => { r.difficulty === difficultyChosen });
    return loadRiddles(byDiffArr);
}

