var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var basicArr = [];
var clozeArr = [];

var basicCount = 0;
var clozeCount = 0;

var winCount = 0;
var loseCount = 0;


//cloze card questions
clozeArr.push(new ClozeCard("Kobe Bryant wore number 24 and number 8 for the Lakers.", "Kobe Bryant"));
clozeArr.push(new ClozeCard("Doc Rivers is the coach of the Clippers.", "Doc Rivers"));
clozeArr.push(new ClozeCard("Wilt Chamberlain scored 100 points in a game, the most in NBA history.", "Wilt Chamberlain"));
clozeArr.push(new ClozeCard("Kevin Durant goes by the nickname 'cupcake' and 'snake'.", "Kevin Durant"));
clozeArr.push(new ClozeCard("Greg Oden was drafted one pick before Kevin Durant in the 2007 NBA Draft.", "Greg Oden"))
clozeArr.push(new ClozeCard("Vince Carter goes by the nickname half man half amazing.", "Vince Carter"));
clozeArr.push(new ClozeCard("Marcus Morris is the twin brother of NBA player Markieff Morris.", "Marcus Morris"));
clozeArr.push(new ClozeCard("Blake Griffin won the dunk contest by jumping over a Kia.", "Blake Griffin"));
clozeArr.push(new ClozeCard("Steve Francis was the runner up to Vince Carter in the 2000 dunk contest.", "Steve Francis"));
clozeArr.push(new ClozeCard("Russell Westbrook was the last player to average a triple double for the season", "Russell Westbrook"));

//basic card questions
basicArr.push(new BasicCard("Which NBA Legend does the NBA Logo depict?", "Jerry West"));
basicArr.push(new BasicCard("Which team blew a 3-1 lead in the NBA Finals? - team name only, no city, no the: ", "Warriors"));
basicArr.push(new BasicCard("How many points did Tracy McGrady famously score in 31 seconds to beat the Spurs?", "13"));
basicArr.push(new BasicCard("How many championships did Kareem Abdul Jabbar win?", "6"));
basicArr.push(new BasicCard("What number did Tim Duncan wear in the NBA?", "21"));
basicArr.push(new BasicCard("What country is Spurs player Manu Ginobili from?", "Argentina"));
basicArr.push(new BasicCard("Who won the 2017 sixth man of the year award and also the 2017 three point contest?", "Eric Gordon"));
basicArr.push(new BasicCard("Which player holds the record for most threes made in a season?", "Stephen Curry"));
basicArr.push(new BasicCard("Who goes by the nickname 'The Process'?", "Joel Embiid"));
basicArr.push(new BasicCard("Which NBA bust was drafted right after Lebron James in the 2003 NBA Draft?", "Darko Milicic"));


function quiz() {

basicCount = 0;
clozeCount = 0;

winCount = 0;
loseCount = 0;

    inquirer.prompt([{
        type: "list",
        name: "type",
        message: "What kind of flashcard quiz would you like to play?",
        choices: ["Basic Card", "Cloze Card"]
    }]).then(function (card) {
        if (card.type === "Basic Card") {
            function basicQuestion() {
                if (basicCount < basicArr.length) {
                    inquirer.prompt([{
                        type: "input",
                        name: "q",
                        message: basicArr[basicCount].front
                    }]).then(function (data) {
                        if (data.q === basicArr[basicCount].back) {
                            console.log("Answer: " + basicArr[basicCount].back)
                            winCount++;
                            console.log("Correct: " + winCount);
                            console.log("Incorrect: " + loseCount);
                        }
                        else {
                            console.log("Answer: " + basicArr[basicCount].back)
                            loseCount++;
                            console.log("Correct: " + winCount);
                            console.log("Incorrect: " + loseCount);
                        }
                        basicCount++;
                        basicQuestion();
                    })
                }
                else {
                    console.log("Game Over")
                    inquirer.prompt([{
                        type: "list",
                        name: "again",
                        message: "Play again?",
                        choices: ["Yes", "No"]
                    }]).then(function(res){
                        if (res.again === "Yes"){
                            quiz();
                        }
                        else {
                            process.end;
                        }
                    })
                }
            }
            basicQuestion();
        }
        else {
            function clozeQuestion() {
                if (clozeCount < clozeArr.length) {
                    inquirer.prompt([{
                        type: "input",
                        name: "q",
                        message: "____________" + clozeArr[clozeCount].partial
                    }]).then(function (data) {
                        if (data.q === clozeArr[clozeCount].cloze) {
                            console.log("Answer: " + clozeArr[clozeCount].fullText);
                            winCount++;
                            console.log("Correct: " + winCount);
                            console.log("Incorrect: " + loseCount);
                        }
                        else {
                            console.log("Answer: " + clozeArr[clozeCount].fullText);
                            loseCount++;
                            console.log("Correct: " + winCount);
                            console.log("Incorrect: " + loseCount);
                        }
                        clozeCount++;
                        clozeQuestion();
                    })
                }
                else {
                    console.log("Game Over")
                    inquirer.prompt([{
                        type: "list",
                        name: "again",
                        message: "Play again?",
                        choices: ["Yes", "No"]
                    }]).then(function(res){
                        if (res.again === "Yes"){
                            quiz();
                        }
                        else {
                            process.end;
                        }
                    })
                }
            }
            clozeQuestion();
        }
    })
};
quiz();
