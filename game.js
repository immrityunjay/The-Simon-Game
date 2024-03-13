var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var started = false ;
var level = 0 ;
function nextSequence() {
userClickedPattern  =[];
level++;
 $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);



  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);


}




$(".btn").click(function(){

var userChosenColour = $(this).attr("id") ;

userClickedPattern.push(userChosenColour);


playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
});


function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour)
{
$("#" + currentColour).addClass("pressed");

setTimeout(function(){
$("#" + currentColour).removeClass("pressed");
},100);


}

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){

if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
{
  console.log("success");
  if (userClickedPattern.length=== gamePattern.length){

         //5. Call nextSequence() after a 1000 millisecond delay.
         setTimeout(function () {
           nextSequence();
         }, 1000);

       }

}
else
{
  console.log("wrong");
  var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    },200);
     $("#level-title").text("Game Over, Press Any Key to Restart");
     startOver();
}


}

function startOver()
{
  level=0;
  gamePattern=[];
  started=false ;

}
