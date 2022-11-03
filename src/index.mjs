import { convertCvsToJson } from "./cvs.mjs";
import { resolve } from "node:path";
import { data, shaSum } from "./json.mjs";



const cvs = resolve(process.argv[2]);


const fileName = process.argv[3]

const path = await convertCvsToJson(cvs, fileName);
console.log(path)
const filePath = await resolve(path)

const sha = shaSum(filePath)
await data(filePath,fileName, sha)

