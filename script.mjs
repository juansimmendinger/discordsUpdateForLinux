import fs from 'fs';
import os from 'os'
import path from 'path';



const userHomeDir = os.homedir();
console.log(userHomeDir)

const discordVersion = `${userHomeDir}/discordversion.txt`
let fullPathToJSON = `${userHomeDir}/pathlocation.txt`

var updateString = ""

let discord = fs.readFile(discordVersion, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.replace(/\r?\n|\r/g, ""))
    updateString = data.replace(/\r?\n|\r/g, "")
  })


 let pathLocation = fs.readFile(fullPathToJSON, 'utf8', (err, data) => {
    if (err) throw err;
      console.log(data.replace(/\r?\n|\r/g, ""))
    let tmpData = data.replace(/\r?\n|\r/g, "")

    let changedVersion = fs.readFile(tmpData, 'utf8', (err, data) => {
      if (err) throw err;
        console.log(data)
        const jsonObject = JSON.parse(data)
        jsonObject.version = `${updateString}`
        const updatedJSONString = JSON.stringify(jsonObject)
        fs.writeFileSync(tmpData, updatedJSONString)
    })
  })






