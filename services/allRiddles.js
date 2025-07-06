import fsPromise from "fs/promises";

export async function updateArrRiddles(){
    const path = "../riddles"
    const allRiddles = [];
    const loadFile = await fsPromise.readdir(`../${path}`);
    
    for (const file of loadFile) {
        if(file === "allRiddles.js" || !file.endsWith(".js")){
            continue;
        }
        
        const impFile = await import(`${path}/${file}?update=${Date.now()}`)
        const riddle = impFile.default;
        allRiddles.push(riddle)
    }
    console.log(allRiddles);
    
    return allRiddles;
}