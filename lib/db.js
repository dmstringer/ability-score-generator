//this file defines the database connection logic
const knexLib = require('knex')
const dbCfg = require('../knexfile')    //the knexfile is one directory UP, so using ..

//this will hold our database connection
let conn = null

// this should return a promise to the original call from app.js
function connect () {
    return new Promise(function (resolve, reject) {
        conn = knexLib(dbCfg.development)      //we required knexfile.js above, then use that object to use the development connection to the database
        conn.raw('SELECT 1 + 1 AS test')               //now conn is the connection to the database, and we can send raw SQL
            .then(function (result){
                console.log(result.rows)
                console.log('xxxxxxxxxxxxxxxxxxxxx')
                resolve()
            })
            .catch(function (err) {
                reject(err)
            })
    })   
}

//SELECT character.charname, abilities.strength, abilities.dexterity, abilities.constitution, abilities.intelligence, abilities.wisdom, abilities.charisma
//from character
//inner join abilities on character.id = abilities.character_id;

const getCharsQuery = `
SELECT character.charname, abilities.strength, abilities.dexterity, abilities.constitution, abilities.intelligence, abilities.wisdom, abilities.charisma
from character
inner join abilities on character.id = abilities.character_id;`

function getChars () {
    return conn.raw(getCharsQuery)
        .then(function(result) {
            return result.rows
        })

}


//------------------------------------------
// Public API

module.exports = {                          //this exports the connect function out to app
    connect: connect,
    getChars: getChars

}
