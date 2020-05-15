// EventListener for the Roll Button
const allTheStatBoxes = document.querySelectorAll('.stats');
const theSTRBoxes = document.querySelectorAll('.strength');
const theDEXBoxes = document.querySelectorAll('.dexterity');
const theCONBoxes = document.querySelectorAll('.constitution');
const theINTBoxes = document.querySelectorAll('.intelligence');
const theWISBoxes = document.querySelectorAll('.wisdom');
const theCHABoxes = document.querySelectorAll('.charisma');

document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
    })
  })

function resetAllBoxes () {

}

allTheStatBoxes.forEach(item => {
    item.addEventListener('load', resetAllBoxes)
  })



$(".thisClass").not("#thisId").doAction();


// function addEmUp (scoreArray) {
//     const lowscore = Math.min(...scoreArray)
//     const arraySum = scoreArray.reduce(addFunc)     // using reduce (it calls addFunc) to sum the array passed into addEmUp
//     const finalScore = arraySum - lowscore
//     return finalScore
// }

// btnRandomRoll.addEventListener('click', clickRollBtn);

// const rollURL = "https://www.random.org/integers/?num=24&min=1&max=6&col=1&base=10&format=plain&rnd=new"

// function clickRollBtn () {
//     let scoreSetArray = [];
//     let scoreArray1 = [];
//     let scoreArray2 = [];
//     let scoreArray3 = [];
//     let scoreArray4 = [];
//     let scoreArray5 = [];
//     let scoreArray6 = [];

//     fetch(rollURL)
//         .then(extractNumbers)                                      
//         .then(useTheData);

//         function extractNumbers (response) {
//             return response.text()
//         }

//         function useTheData (data) {
//             //the data set comes back with spaces between the numbers,
//             //so will read into an array to get integers
//             for (let i = 0; i < data.length; i++) {
//                 if (Number.isInteger(parseInt(data[i]))) {
//                     scoreSetArray.push(parseInt(data[i])) ;
//                 }
//             }

//             console.log(scoreSetArray);

//             for (let i = 0; i < 24; i++) {
//                 if (i < 4) {
//                     scoreArray1.push(scoreSetArray[i])
//                 } else if (i < 8) {
//                     scoreArray2.push(scoreSetArray[i])
//                 } else if (i < 12) {
//                     scoreArray3.push(scoreSetArray[i])
//                 } else if (i < 16) {
//                     scoreArray4.push(scoreSetArray[i])
//                 } else if (i < 20) {
//                     scoreArray5.push(scoreSetArray[i])
//                 } else {
//                     scoreArray6.push(scoreSetArray[i])
//                 }
//             };

//             boxElScore1.innerHTML = addEmUp(scoreArray1);
//             boxElScore2.innerHTML = addEmUp(scoreArray2);
//             boxElScore3.innerHTML = addEmUp(scoreArray3);
//             boxElScore4.innerHTML = addEmUp(scoreArray4);
//             boxElScore5.innerHTML = addEmUp(scoreArray5);
//             boxElScore6.innerHTML = addEmUp(scoreArray6);

//             //pElInspQuote.innerHTML = '"' + data[quoteNumber].text + '"';
//             //pElInspAuthor.innerHTML = data[quoteNumber].author;
//             //$( "#inspContainer" ).effect( "highlight", "slow" );
//         }
// }