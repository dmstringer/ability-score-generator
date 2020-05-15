const express = require('express')

const app = express()

app.use(express.static('public'))

const port = 7878

// set the template engine
app.set('view engine', 'hbs')


const dummylist = [
    {
        charname: 'Conan',
        strength: 18,
        dexterity: 12,
        constitution: 15,
        intelligence: 8,
        widsom: 13,
        charisma: 10
    },
    {
        charname: 'Merlin',
        strength: 9,
        dexterity: 12,
        constitution: 10,
        intelligence: 18,
        widsom: 15,
        charisma: 14
    }
]

app.get('/', function (req,res){
    res.render('index', {title: 'Hey', message:'Hello there!'})
})

app.listen(port, function () {
    console.log('express is listening on port ' + port)
})