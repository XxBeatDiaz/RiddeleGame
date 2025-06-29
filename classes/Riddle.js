import { resolve } from "path";
import readline from "readline";
import { question } from "readline-sync";


export class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer; 
    }

    ask(){
        let endQuestion = false;

        while(!endQuestion){
            this.displayQuestion()
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
      
    displayQuestion = function(){
        console.log(`${this.taskDescription}`);
    }
    
    getAnswer = function(){
        const answer = question(`Enter your answer: `);
        return answer.trim();
    }

    checkAnswer = function(answer){
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