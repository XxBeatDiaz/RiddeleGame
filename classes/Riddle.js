import { question } from "readline-sync";
// import { resolve } from "path";
// import readline from "readline";


export class Riddle{
    constructor(objectRiddle){
        this.id = objectRiddle.id;
        this.type = objectRiddle.type;
        this.name = objectRiddle.name;
        this.taskDescription = objectRiddle.taskDescription;
        this.correctAnswer = objectRiddle.correctAnswer; 
    }

    ask(){
        let endQuestion = false;

        while(!endQuestion){
            this.displayQuestion();
            const answer = this.getAnswer();

            if(this.checkAnswer(answer)){
                endQuestion = true;
                console.log(`Congratulations :)`);
            }
            else{
                console.log(`Try again :(`);    
            }
        }
    }
      
    displayQuestion(){
        console.log(`Difficulty level: ${this.name}\n`);       
        console.log(`${this.taskDescription}`);
    }

    getRidleType(){
        return this.type;
    }
    
    getAnswer(){
        const answer = question(`Enter your answer: `);
        return answer.trim();
    }

    checkAnswer(answer){
        let isCorrect = false;
        if (answer.toLowerCase() === this.correctAnswer.toLowerCase()) {
            isCorrect = true;
        }
        return isCorrect;
    }

    // async asking
    // askSingl(query){
    //     const rl = readline.createInterface({
    //         input: process.stdin, 
    //         output: process.stdout,
    //     })
    //     return new Promise((resolve) => {
    //         rl.question(query, (answer) => {
    //             rl.close();
    //             resolve(answer)
    //         });
    //     });
    // }
    
    // async ask(){
        // let endQuestion = false;
    // while(!endQuestion){
        
    //     const answer = await this.askSingl(`\n${this.taskDescription}\nEnter your answer: `);
    //     if(this.checkAnswer(answer)){
        //         endQuestion = true;
        //         console.log(`Congratulations :)`);
        //     }
        //     else{
            //         console.log(`Try again :(`);    
            //     }
    // }
    
}