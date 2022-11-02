
import sha256File from 'sha256-file';
import { resolve } from 'node:path'
import { readFile, writeFileSync } from 'node:fs'
import { Parser } from 'json2csv';



const filePath = resolve('output.json')


const shaSum = await sha256File(filePath)

console.log(shaSum,'lie')

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
const data =  jsonReader(filePath, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
 const jsonString = JSON.stringify(convert(data))
 writeFileSync('./newCustomer.json', jsonString)

  });

const convert = (data) => {
   
    return data.map(obj=>{
        obj.sha256=shaSum
        return obj

    })
}

