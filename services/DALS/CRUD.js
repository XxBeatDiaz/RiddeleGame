import fs from "fs/promises";
import path from "path";

export async function createFile(dirPath, fileName, content) {
    const fullPath = path.join(dirPath, `${fileName}.js`);
    try {
        await fs.writeFile(fullPath, content);
        console.log(`Create ${fileName}.js: Successfull\n`);
    } catch (err) {
        console.error("Error: ", err);
    }
}
