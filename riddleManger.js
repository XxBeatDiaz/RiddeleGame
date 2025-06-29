//imports
import { ChoiceRidle } from "./classes/choiceRidle.js";
import { Riddle } from "./classes/Riddle.js";

//Convert all obj riddles and load to an instances
const loadAllRiddles = function (riddles) {
    const loadedRiddles = riddles.map( (r) => {
            if (r.type === "regular") { 
                return new Riddle(r)
            }
            else if(r.type === "choices"){
                return new ChoiceRidle(r, r.choices)
            }
        }
    );
    
    return loadedRiddles;
}

//Load by difficulty level

export {loadAllRiddles}