var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var winCount = 0;
var loseCount = 0;

var question1 = new ClozeCard("Kobe Bryant wore number 24 and number 8 for the Lakers", "Kobe Bryant");
var question2 = new BasicCard("Which NBA Legend does the NBA Logo depict?", "Jerry West");
var question3 = new ClozeCard("Doc Rivers is the coach of the Clippers", "Doc Rivers");
var question4 = new BasicCard("How many championships did Kareem Abdul Jabbar win?", 6);
var question5 = new ClozeCard("Wilt Chamberlain scored 100 points in a game, the most in NBA history.", "Wilt Chamberlain");
var question6 = new BasicCard("What number did Tim Duncan wear in the NBA?", 21);
var question7 = new ClozeCard("Kevin Durant goes by the nickname 'cupcake' and 'snake'.", "Kevin Durant");
var question8 = new BasicCard("How many points did Tracy McGrady famously score in 31 seconds to beat the Spurs", 13);
var question9 = new ClozeCard("Greg Oden was drafted one pick before Kevin Durant in the 2007 NBA Draft.", "Greg Oden");
var question10 = new BasicCard("Which team blew a 3-1 lead in the NBA Finals? - team name only, no city, no the", "Warriors");

function game() {

    inquirer.prompt([{
        type: "input",
        name: "q1",
        message: "_________" + question1.partial
    }]).then(function (data) {
        if (data.q1 === question1.cloze) {
            console.log("correct")
            winCount++;
        }
        else {
            console.log("no");
            loseCount++;
        }

        inquirer.prompt([{
            type: "input",
            name: "q2",
            message: question2.front
        }]).then(function (data) {
            if (data.q2 === question2.back) {
                console.log("correct")
                winCount++;
                console.log(winCount);
            }
            else {
                console.log("no");
                loseCount++;
                console.log(loseCount);
            }
            inquirer.prompt([{
                type: "input",
                name: "q3",
                message: "_________" + question3.partial
            }]).then(function (data) {
                if (data.q3 === question3.cloze) {
                    console.log("correct")
                    winCount++;
                    console.log(winCount);
                }
                else {
                    console.log("no");
                    loseCount++;
                    console.log(loseCount);
                }
                inquirer.prompt([{
                    type: "input",
                    name: "q4",
                    message: question4.front
                }]).then(function (data) {
                    if (data.q4 === question4.back) {
                        console.log("correct")
                        winCount++;
                        console.log(winCount);
                    }
                    else {
                        console.log("no");
                        loseCount++;
                        console.log(loseCount);
                    }
                    inquirer.prompt([{
                        type: "input",
                        name: "q5",
                        message: "_________" + question4.partial
                    }]).then(function (data) {
                        if (data.q5 === question5.cloze) {
                            console.log("correct")
                            winCount++;
                            console.log(winCount);
                        }
                        else {
                            console.log("no");
                            loseCount++;
                            console.log(loseCount);
                        }
    
                    })
                })

            })
        })
    });



}

game();

//console.log(holder)