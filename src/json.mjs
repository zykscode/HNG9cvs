import sha256File from "sha256-file";
import { readFile, writeFile, writeFileSync } from "node:fs";

export const shaSum = (filePath) => sha256File(filePath);

function arrayToCSV(data) {
  const csv = data.map((row) => Object.values(row));
  csv.unshift(Object.keys(data[0]));
  return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
}

async function writeCSV(fileName, data) {
  try {
    await writeFileSync(fileName, data);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

function jsonReader(filePath, cb) {
  readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
export const data = async (filePath, fileName, sha) => {
 
    jsonReader(filePath, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      data["sha256"] = sha;
      const dat = async () => data;
      let newData = JSON.stringify(data);
      writeFileSync(`${fileName}.json`, newData);
      const write = async () => {
        const data = await dat();
        const {attributes, collection } = data;
        if(attributes==undefined){
          data.attributes=''
        }else{
          data.attributes=JSON.stringify(data.attributes)
        }
        if(collection==undefined) {
          data.collection=''
        }else{
          data.collection=JSON.stringify(data.collection)
        }


        console.log(attributes,collection, 'wwk')
        const CSV = arrayToCSV([data]);
        writeCSV(`${fileName}.output.csv`, CSV);
        console.log(`Successfully converted ${fileName}!`);
      };

      write();
      return newData;
    });
};
