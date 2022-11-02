
import pkg from 'csvtojson';
const  CSVToJSON  = pkg;
import { resolve } from 'node:path'
import { writeFileSync } from 'node:fs'
const cvs = resolve(process.argv[2])


//convert users.csv file to JSON array
;(async () => {
  try {
    const data = await CSVToJSON().fromFile(`${cvs}.csv`)
    const length = data.length
    let finalJson = data.map((object)=>convertCvsToCHIP(object, length))

    writeFileSync('output.json', JSON.stringify(finalJson.slice(1)))
   
  } catch (err) {
    console.log(err)
  }
})()


const convertCvsToCHIP = (object, length) => {
    const {Filename:name, Description, Filename, Gender, UUID} = object
    const series_number=object['Series Number']
    
   
    return({
       "format":"CHIP-0007",
       "name":name,
       "description": Description,
       "minting_tool": "Team x",
       "sensitive_content": false,
       "series_number":series_number,
       "series_total": length-1,
       "attributes": [
           {
               "trait_type": "gender",
               "value": Gender
           }
       ],
       collection: {
           "name": Filename,
           "id": UUID,
           "attributes": [
               {
                   "type": "description",
                  " value": Description
               }
           ]
    }})
}