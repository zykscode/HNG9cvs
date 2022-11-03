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
>`$ node .\src\index "HNGi9 CSV FILE - Sheet1"`
4. you will get the cvs output as **HNGi9 CSV FILE - Sheet1.output.cvs** and the json file **HNGi9 CSV FILE - Sheet1.json**
5. you can also get the chip-007 format for just a **filename** in a row of cvs for example **adewale-the-amebo** all you do is you add the filename as the fourth argv i.e **node .\src\index.mjs cvsfilename filename** like this
> `$ node .\src\index "HNGi9 CSV FILE - Sheet1 adewale-the-amebo"`