import { question } from "readline-sync";

export function askFileName() {
    const fileName = question("Enter file name> ");
    return fileName;
}

export function askId() {
    const id = question("Enter ID> ");
    return id;
}

export function askType() {
    printTypes();
    const choose = question("choose> ");
    switch (choose) {
        case "1":
            return "regular";
        case "2":
            return "choices";
        default:
            return "regular";
    }
}

export function askDifficulty() {
    printDifficulties();
    const choose = question("choose> ");
    switch (choose) {
        case "1":
            return "easy";
        case "2":
            return "medium";
        case "3":
            return "hard";
        default:
            return "easy";
    }
}

export function askName() {
    const name = question("Enter name> ");
    return name;
}

export function askTaskDescription() {
    const taskDescription = question("Enter task description> ");
    return taskDescription;
}

export function askCorrectAnswer() {
    const correctAnswer = question("Enter correct answer> ");
    return correctAnswer;
}

export function askChoices() {
    const choices = [];
    for (let i = 0; i < 4; i++) {
        const choice = question(`Enter choice num ${i + 1}> `)
        choices.push(choice);
    }
    return choices;
}

function printTypes() {
    console.log("1. regular\n2. choices");
}

function printDifficulties() {
    console.log("1. easy\n2. medium\n3. hard");
}

