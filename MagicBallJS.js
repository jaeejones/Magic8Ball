var answers = [ "Not No","Yes...someday", "No", "It is not apparent at this time","That remains to be seen", "Red light...no! ", "Yes and Yes! ",
"Out of answers", "come back again tomorrow!","Thanks for asking, but no!",
"Yes, I say to you!" ];
document.getElementById('answerButton').onclick = function () { 
    var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};

//var magic8ball = prompt("The Magic 8-Ball says: Ask your question here:", "");
//var answer = Math.floor(Math.random() * (5 - 0 + 1) + 0);
//if (answer === 1) {
//    console.log("Yes");
//}
//else if (answer === 2) {
//    console.log("No");
//}
//else if (answer === 3) {
//    console.log("Maybe");
//}
//else if (answer === 4) {
//    console.log("Ask again later");
//}
//else if (answer === 5) {
//    console.log("Definitely");
//}
//else {
//    console.log("How should I know?");
//}
