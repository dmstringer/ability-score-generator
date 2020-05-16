const express = require('express')
const db = require('./lib/db')

const app = express()

app.use(express.static('public'))

const port = 7878

// set the template engine
app.set('view engine', 'hbs')


app.get('/', function (req,res){
    db.getChars()
        .then(function (charList) {
            res.render('index', { characters: charList })
        })
        .catch(function () {
            //TODO show and error page
        })
})

const startExpressApp = function () {
    app.listen(port, function () {
        console.log('express is listening on port ' + port)
    })
}

const bootupSequenceFailed = function (err) {
    console.error('Unable to connect to the database;', err)
    console.error('Goodbye!')
    process.exit(1)
}

//global kickoff point
//using db object from the required db file above, the connect fuction is defined there
db.connect()
    .then(startExpressApp)
    .catch(bootupSequenceFailed)

//calling the method from the db file (which queries the database) and returns the query result
// db.getChars()
//     .then(function (charList) {
//         console.log(charList)
//     })
