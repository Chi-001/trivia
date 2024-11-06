let questions = ["the outer part of a bread is called?", "which is the largest planet in the solar system?", "what is the name of the longest river?",
    "what is the nearest planet to the sun?", "what food never spoils?"];
let answers = ["crust", "jupiter", "nile", "mercury", "honey"];
let score = 0;
let totalScore = 5;
 

function checkResponse(){
    for(i = 0; i < 5; i++){
        response = prompt(questions[i])

        if(response.length === 0){
            alert("Please Input Answer!")
            checkResponse()
        }

        else if(response.length > 0){
            if(response.toLowerCase() === answers[i]){
                score += 1
                alert("Correct!")
            }
            else{
                alert("Incorrect!")
            }
        }
    }
    alert("You have completed the test")
    alert("You scored" +score+ "/" + totalScore)
}
checkResponse();
