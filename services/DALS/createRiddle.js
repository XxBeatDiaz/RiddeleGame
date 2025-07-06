import * as dalHelper from "./helperDalFuncs.js";
import * as funcCRUD from "./CRUD.js";
import { updateArrRiddles } from "../allRiddles.js";

async function creatRiddle() {
    const path = "../../riddles"
    const fileName = dalHelper.askFileName();
    const riddle = riddleMenu();
    await funcCRUD.createFile(path, fileName, riddle);
    updateArrRiddles();
    // addToAllRiddles(fileName); Temp func to add riddles into arr
}

function riddleMenu() {
    const id = dalHelper.askId();
    const type = dalHelper.askType();
    const difficulty = dalHelper.askDifficulty();
    const name = dalHelper.askName();
    const taskDescription = dalHelper.askTaskDescription();
    const correctAnswer = dalHelper.askCorrectAnswer();

    if (type === "regular") {
        const riddle = regularRiddle(id, type, difficulty, name, taskDescription, correctAnswer);
        return riddle;
    }
    else if (type === "choices") {
        const choices = dalHelper.askChoices();
        const riddle = choiceRiddle(id, type, difficulty, name, taskDescription, correctAnswer, choices);
        return riddle;
    }


}

function regularRiddle(id, type, difficulty, name, taskDescription, correctAnswer) {
    const riddle = `export default {
    id: ${id},
    type: '${type}',
    difficulty: '${difficulty}',
    name: '${name}',
    taskDescription: '${taskDescription}',
    correctAnswer: '${correctAnswer}'
};`
    return riddle;
}

function choiceRiddle(id, type, difficulty, name, taskDescription, correctAnswer, choices) {
    const riddle = `export default {
    id: ${id},
    type: '${type}',
    difficulty: '${difficulty}',
    name: '${name}',
    taskDescription: '${taskDescription}',
    correctAnswer: '${correctAnswer}',
    choices: ${JSON.stringify(choices)}
};`
    return riddle;
}

// async function updateArrRiddles(){
//     const path = "../../riddles"
//     const allRiddles = [];
//     const loadFile = await fsPromise.readdir(`${path}`);
    
//     for (const file of loadFile) {
//         if(file === "allRiddles.js" || !file.endsWith(".js")){
//             continue;
//         }
        
//         const impFile = await import(`${path}/${file}?update=${Date.now()}`)
//         const riddle = impFile.default;
//         allRiddles.push(riddle)
//     }
//     return allRiddles;
// }

await creatRiddle()


//temp func to add riddle into arr
// function addToAllRiddles(fileName) {
//     const path = "../../riddles/allRiddles.js";
//     const importRiddle = `import ${fileName} from './${fileName}.js';`;
//     fs.appendFile(path, importRiddle, (err) => { if (err) { console.log(err) } });
// }



