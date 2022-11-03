import { convertCvsToJson } from "./cvs.mjs";
import { resolve } from "node:path";
import { data, shaSum } from "./json.mjs";




const cvs = resolve(process.argv[2]);


const fileN =process.argv[3]
if(fileN){
    const path = await convertCvsToJson(cvs, fileN);
    const sha = shaSum(resolve(path))
    data(path,fileN,sha)
}
else{const paths =   await convertCvsToJson(cvs,);
    console.log(paths)

const newPaths = paths.map(a=>`${a}.json`)

const filePaths = newPaths.map((a)=>resolve(a))

const sha =  filePaths.map((filePath)=>shaSum(filePath))
console.log(paths)
newPaths.forEach((elem,i )=> {
   data(elem,paths[i],sha[i] )
});}


