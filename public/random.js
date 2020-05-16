// EventListener for the Roll Button
const btnRandomRoll = document.getElementById("rollButton");
const boxElScore1 = document.getElementById("score1");
const boxElScore2 = document.getElementById("score2");
const boxElScore3 = document.getElementById("score3");
const boxElScore4 = document.getElementById("score4");
const boxElScore5 = document.getElementById("score5");
const boxElScore6 = document.getElementById("score6");
const inpElStatNum1 = document.getElementById("statNum1");
const inpElStatNum2 = document.getElementById("statNum2");
const inpElStatNum3 = document.getElementById("statNum3");
const inpElStatNum4 = document.getElementById("statNum4");
const inpElStatNum5 = document.getElementById("statNum5");
const inpElStatNum6 = document.getElementById("statNum6");

const addFunc = (a, b) => a + b;             // function for adding two numbers.

function addEmUp (scoreArray) {
    const lowscore = Math.min(...scoreArray)
    const arraySum = scoreArray.reduce(addFunc)     // using reduce (it calls addFunc) to sum the array passed into addEmUp
    const finalScore = arraySum - lowscore
    return finalScore
}

btnRandomRoll.addEventListener('click', clickRollBtn);

const rollURL = "https://www.random.org/integers/?num=24&min=1&max=6&col=1&base=10&format=plain&rnd=new"

function clickRollBtn () {
    let scoreSetArray = [];
    let scoreArray1 = [];
    let scoreArray2 = [];
    let scoreArray3 = [];
    let scoreArray4 = [];
    let scoreArray5 = [];
    let scoreArray6 = [];

    fetch(rollURL)
        .then(extractNumbers)                                      
        .then(useTheData);

        function extractNumbers (response) {
            return response.text()
        }

        function useTheData (data) {
            //the data set comes back with spaces between the numbers,
            //so will read into an array to get integers
            for (let i = 0; i < data.length; i++) {
                if (Number.isInteger(parseInt(data[i]))) {
                    scoreSetArray.push(parseInt(data[i])) ;
                }
            }

            console.log(scoreSetArray);

            for (let i = 0; i < 24; i++) {
                if (i < 4) {
                    scoreArray1.push(scoreSetArray[i])
                } else if (i < 8) {
                    scoreArray2.push(scoreSetArray[i])
                } else if (i < 12) {
                    scoreArray3.push(scoreSetArray[i])
                } else if (i < 16) {
                    scoreArray4.push(scoreSetArray[i])
                } else if (i < 20) {
                    scoreArray5.push(scoreSetArray[i])
                } else {
                    scoreArray6.push(scoreSetArray[i])
                }
            };

            boxElScore1.innerHTML = addEmUp(scoreArray1);
            boxElScore2.innerHTML = addEmUp(scoreArray2);
            boxElScore3.innerHTML = addEmUp(scoreArray3);
            boxElScore4.innerHTML = addEmUp(scoreArray4);
            boxElScore5.innerHTML = addEmUp(scoreArray5);
            boxElScore6.innerHTML = addEmUp(scoreArray6);
            inpElStatNum1.value = addEmUp(scoreArray1);
            inpElStatNum2.value = addEmUp(scoreArray2);
            inpElStatNum3.value = addEmUp(scoreArray3);
            inpElStatNum4.value = addEmUp(scoreArray4);
            inpElStatNum5.value = addEmUp(scoreArray5);
            inpElStatNum6.value = addEmUp(scoreArray6);

            //pElInspQuote.innerHTML = '"' + data[quoteNumber].text + '"';
            //pElInspAuthor.innerHTML = data[quoteNumber].author;
            //$( "#inspContainer" ).effect( "highlight", "slow" );
        }
}