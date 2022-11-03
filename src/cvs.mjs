import pkg from "csvtojson";
const CSVToJSON = pkg;
import { writeFileSync } from "node:fs";




//convert users.csv file to JSON array
let newFile = process.argv[3]

export const convertCvsToJson = async (cvs, newFile) => {
  try {
    const data = await CSVToJSON().fromFile(`${cvs}.csv`);
    const length = data.length;
   
    let jayson = data.map( (object) => convertCvsToCHIP(object, length));
    let groups = jayson.filter((obj) => isNaN(obj["series_number"]));
    const teamNames = iterGroup(groups);
    let json = jayson.filter((obj) => !isNaN(obj["series_number"]));
    let newJson = json.map((a)=>{
      a.series_total = json.length;
      if(a.series_number%20==0){
        a.minting_tool=teamNames[Math.floor(a.series_number/20)-1]
      }else{
        a.minting_tool=teamNames[Math.floor(a.series_number/20)]}
      
      return a
    })
    if(newFile){
    let fileNameJson = json.filter((obj)=>obj.fileName==newFile)
    writeFileSync(
      `${newFile}.json`,
      JSON.stringify(fileNameJson)
      
    );
    return `${newFile}.json`}
    else{
      const a =  () => newJson.map( (js)=>{
       writeFileSync(`${js.fileName}.json`, JSON.stringify(js))
       return js.fileName
      })
      return a()
    }
  } catch (err) {
    console.log(err);
  }
};



const iterGroup = (group) => {
  let parseJSONObject = group;
  let arr = [];
  let l = parseJSONObject.length;
  for (let i = 0; i < l; i++) {
    if (parseJSONObject[i]["series_number"]) {
      arr.push(parseJSONObject[i]["series_number"]);
    }
  }
  return arr;
};

const convertCvsToCHIP = (object, length) => {
  const { Name, Description, Filename, Gender, UUID, Attributes } = object;
  const series_number = object["Series Number"]; 
 let attObj = []
    
 if(Attributes){
  const arr = Attributes.split(",");
  const newArr = arr.map((a) => {
    return a.split(":");
  }); 
  let obj = {};
  attObj = newArr.map((a) => {
   
    obj["type"] = ()=> a[0]?a[0]:'';
    obj["kind"] = ()=> a[1]?a[1]:'';
    
  })}

  return {
    format: "CHIP-0007",
    fileName:Filename,
    name: Name,
    description: Description,
    minting_tool: "Team x",
    sensitive_content: false,
    series_number: series_number,
    series_total: length,
    attributes: [
      {
        trait_type: "gender",
        value: Gender,
      },
    ],
    collection: {
      name: Name,
      id: UUID,
      attributes: attObj,
    },
  };
};

