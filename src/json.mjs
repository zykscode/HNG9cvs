import sha256File from "sha256-file";
import { readFile, writeFileSync } from "node:fs";
import { Parser } from "json2csv";

// get the sha256 fir the json taking the json path
export const shaSum = (filePath) => sha256File(filePath);

// function arrayToCSV(data) {
//   const csv = data.map((row) => Object.values(row));
//   csv.unshift(Object.keys(data[0]));
//   return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
// }

// async function writeCSV(fileName, data) {
//   try {
//     await writeFileSync(fileName, data);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// }

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
      }{
        
      if(process.argv[3]){
      data[0]["sha256"] = sha;
     
      const dat = async () => data;
       let newData = JSON.stringify(data);

      writeFileSync(`${fileName}.json`, (newData));
      const {attributes, collection} = data[0]
        const collect = `${collection.name}:${collection.id}`
        const att = attributes.map((a)=>`${a.type}:${a.kind}`)
const attribute = att.toString().replaceAll(',',(';'))
data[0].collection = collect
data[0].attributes = attribute

      let fields = Object.keys(data[0])
      let opts ={ fields }
      try {
        const parser = new Parser(opts);
        const csv = parser.parse(data[0]);
        console.log(data[0])
        writeFileSync(`${fileName}.output.csv`, csv)
      } catch (err) {
        console.error(err);
      }
      
      // console.log(dat())
      // const write = async () => {
      //   const data = await dat();
      //   const {attributes, collection } = data;
      //   if(attributes==undefined){
      //     data.attributes=''
      //   }else{
      //     data.attributes=JSON.stringify(data.attributes)
      //   }
      //   if(collection==undefined) {
      //     data.collection=''
      //   }else{
      //     data.collection=JSON.stringify(data.collection)
      //   }
      //   const CSV = arrayToCSV([data]);
      //   writeCSV(`${fileName}.output.csv`, CSV);
      //   console.log(`Successfully converted ${fileName}!`);
      // };

      // write();
      
      return newData;}
      else{
        data["sha256"] = sha;
        const dat =  () => [data];
         let newData = JSON.stringify(dat());
        writeFileSync(`${fileName}.json`, (newData));
  
        let fields = Object.keys(data)
        let opts ={ fields }
        const rawData = [data]
        const {attributes, collection} = data
        const collect = `${collection.name}:${collection.id}`
        const att = attributes.map((a)=>`${a.type}:${a.kind}`)
const attribute = att.toString().replaceAll(',',(';'))
data.collection = collect
data.attributes = attribute
        const jsonData = JSON.stringify(rawData)
      
        try {
          const parser = new Parser(opts);
          const csv = parser.parse(data);
          
          writeFileSync(`${fileName}.output.csv`, csv)
        } catch (err) {
          console.error(err);
        }
        
      }
    }});
};
