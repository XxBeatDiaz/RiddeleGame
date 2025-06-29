import { Riddle } from "./Riddle.js";

export class ChoiceRidle extends Riddle{
    constructor(objectRiddle, choices){
        super(objectRiddle);
        this.choices = choices;
    }

    displayQuestion(){
        console.log(`Difficulty level: ${this.name}\n`);       
        console.log(`${this.taskDescription}`);

        const choices = this.choices;
        let choiceNum = 0;
        for (const choice of choices) {
            console.log(`${choiceNum}. ${choice}`);
            
            choiceNum++;
        }
    }
}

