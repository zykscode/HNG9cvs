## HNG9cvs
This is a simple command line app to convert csv to json and also back to csv with the sha256 of the file

## how to run the code
requirement Nodejs ^v14

## how to install and run
download or clone the resipository
open the location in your terminal to the root folder. 
run 

>`- [ ] $ npm install`
1. [ ] move your csv file to the root folder
2. in the terminal run node filename (minus extension) good to put in qoutations
3. you will get the converted cvs file and json file in the root folder
e.g working with a file with the filename HNGi9 CSV FILE - Sheet1.csv
you will tun: 
>`$ npm start "HNGi9 CSV FILE - Sheet1"`
4. you will get the cvs output as **HNGi9 CSV FILE - Sheet1.output.cvs** and the json file **HNGi9 CSV FILE - Sheet1.json**

5. here is an exapmple using
 > new.cvs 
 - content contains:


|Series Number|Filename           |Name               |Description                                                                 |Gender|Attributes                                                                                                                             |UUID                                |
|-------------|-------------------|-------------------|----------------------------------------------------------------------------|------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
|TEAM BEVEL   |                   |                   |                                                                            |      |                                                                                                                                       |                                    |
|1            |adewale-the-amebo  |adewale the amebo  |adewale the amebo                                                           |male  |hair: bald; eyes: black; teeth: none; clothing: red; accessories: mask; expression: none; strenght: powerful; weaknees: curiosity      |cad316c3-37f8-4b27-9f53-9d803bfcfee7|
|2            |alli-the-queeny    |alli the queeny    |Alli is an LGBT Stan.                                                       |male  |hair: bald; eyes: white; teeth: none; clothing: yellow; accessories: mask; expression: none; strength: powerful; weaknees: none        |a57ecda4-a26f-4e97-a757-e1800af39aab|
|3            |aminat-the-snnobish|aminat the snnobish|Aminat never really wants to talk to anyone.                                |female|hair: brown bun; eyes: none; teeth: none; clothing: yellow; accessories: glasses; expression: blank; strength: none; weakness: attitude|0e37ed0d-3e84-4f32-a91f-ec9c4ba8c7de|
|4            |aminu-the-carpenter|aminu the carpenter|Aminu's hands are blessed, he makes the best furniture in the whole of Kano.|male  |hair: bald; eyes: blue; teeth: none; clothing: yellow; accessories: mask; expression: none; strenght: powerful; weaknees: none         |4f30b751-96e7-40fe-97fd-e3d44973ff2f|
 


running `$ npm --new` on cli will generate 4 json files and 4 cvs files the out of the first one is
> adewale-the-amebo.json
```json
[{"format":"CHIP-0007","fileName":"adewale-the-amebo","name":"adewale the amebo","description":"adewale the amebo","gender":"male","minting_tool":"TEAM BEVEL","sensitive_content":false,"series_number":"1","series_total":4,"attributes":[{"type":"hair","kind":" bald"},{"type":" eyes","kind":" black"},{"type":" teeth","kind":" none"},{"type":" clothing","kind":" red"},{"type":" accessories","kind":" mask"},{"type":" expression","kind":" none"},{"type":" strenght","kind":" powerful"},{"type":" weaknees","kind":" curiosity"}],"collection":{"name":"adewale the amebo","id":"cad316c3-37f8-4b27-9f53-9d803bfcfee7"},"sha256":"5707a05048ed785397dedbf17fd88d55e305c90baba188fcdf750137aaadcb9f"}]
```

and the cvs out
>adewale-the-amebo.output.cvs

|format    |fileName           |name               |description                                                                 |gender|minting_tool                                                                                                                           |sensitive_content                   |series_number|series_total|attributes                                                                                                                       |collection                                            |sha256                                                          |
|----------|-------------------|-------------------|----------------------------------------------------------------------------|------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-------------|------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|----------------------------------------------------------------|
|CHIP-0007 |adewale-the-amebo  |adewale the amebo  |adewale the amebo                                                           |male  |TEAM BEVEL                                                                                                                             |false                               |1            |4           |hair: bald; eyes: black; teeth: none; clothing: red; accessories: mask; expression: none; strenght: powerful; weaknees: curiosity|adewale the amebo:cad316c3-37f8-4b27-9f53-9d803bfcfee7|5707a05048ed785397dedbf17fd88d55e305c90baba188fcdf750137aaadcb9f|




6. you can also get the chip-007 format for just a **filename** in a row of cvs for example **adewale-the-amebo** all you do is you add the filename as the fourth argv i.e **npm start --cvsfilename --filename** like this
> `$ npm start "HNGi9 CSV FILE - Sheet1 adewale-the-amebo"`

