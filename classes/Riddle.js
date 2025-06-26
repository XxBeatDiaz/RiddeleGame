import { question } from "readline-sync";
class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer; 
    }

    ask = function(){
        let endQuestion = false;
        while(!endQuestion){
            display()
            answer = getAnswer();
            if(checkAnswer(answer)){
                endQuestion = true;
            }
        }
    }

    display = function(){
        console.log(this.taskDescription);
    }
    
    getAnswer = function(){
        answer = question(`Enter your answer: `);
        return answer;
    }

    checkAnswer = function(answer){
        let isCorrect = false;
        if (answer === this.correctAnswer) {
            isCorrect = true;
        }
        return isCorrect;
    }
}