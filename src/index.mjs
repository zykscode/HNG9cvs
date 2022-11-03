import { convertCvsToJson } from "./cvs.mjs";
import { resolve } from "node:path";
import { data, shaSum } from "./json.mjs";
import { readFile, writeFile, writeFileSync } from 'node:fs'


const cvs = resolve(process.argv[2]);

const fileName = process.argv[3]

const path = await convertCvsToJson(cvs, fileName);
const filePath = await resolve(path)

const sha = shaSum(filePath)
await data(filePath,fileName, sha)

