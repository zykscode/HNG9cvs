import { Parser } from "json2csv";
import { writeFileSync } from "node:fs";

const myData = {"format":"CHIP-0007","fileName":"adewale-the-amebo","name":"adewale the amebo","description":"adewale the amebo","gender":"male","minting_tool":"TEAM BEVEL","sensitive_content":false,"series_number":"1","series_total":4,"attributes":[{"type":"hair","kind":" bald"},{"type":" eyes","kind":" black"},{"type":" teeth","kind":" none"},{"type":" clothing","kind":" red"},{"type":" accessories","kind":" mask"},{"type":" expression","kind":" none"},{"type":" strenght","kind":" powerful"},{"type":" weaknees","kind":" curiosity"}],"collection":{"name":"adewale the amebo","id":"cad316c3-37f8-4b27-9f53-9d803bfcfee7"},"sha256":"5707a05048ed785397dedbf17fd88d55e305c90baba188fcdf750137aaadcb9f"}
const fields = Object.keys(myData);
const opts = { fields };

try {
  const parser = new Parser(opts);
  const csv = parser.parse(myData);
  writeFileSync("output.csv", csv)
} catch (err) {
  console.error(err);
}

console.log(Object.keys(myData))