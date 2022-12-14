import { convertCvsToJson } from "./cvs.mjs";
import { resolve } from "node:path";
import { data, shaSum } from "./json.mjs";



// resolve file name as path
const cvs = resolve(process.argv[2]);

// get the FileName in a row
const fileN =process.argv[3]
if(fileN){
    const path = await convertCvsToJson(cvs, fileN);
    const sha = shaSum(resolve(path))
    data(path,fileN,sha)
}
else{const paths =   await convertCvsToJson(cvs,);

const newPaths = paths.map(a=>`${a}.json`)

const filePaths = newPaths.map((a)=>resolve(a))

const sha =  filePaths.map((filePath)=>shaSum(filePath))

newPaths.forEach((elem,i )=> {
    console.log(elem,paths[i])
   data(elem,paths[i],sha[i] )
});}


