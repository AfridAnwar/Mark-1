
var a =require('readline-sync');
var score=0; 
 
var username=a.question("Whats your name?");
console.log(" Welcome "+username+"  ");
//  play function
  
  function play(question,answer){
    var useranswer=a.question(question);
   
    if (useranswer.toUpperCase()===answer.toUpperCase()){
      console.log("right!");
      score=score+1;

    }else{
      console.log("wrong!!");
    
    }
    console.log("currentscore:",score);
    console.log("---------");
 }
  // array of objects
   var question=[{
     question:"Is Saudi Arabia a GCC countrie?",
     answer:"yes"
   },{
     question:"Who is the king of Saudi Arabia?",
     answer:"salman"
   },{
     question:"Capital of Saudi Arabia?",
     answer:"riyadh"
   },{
     question:"can ladies drive in Saudi Arabia?",
     answer:"yes"
    
   },{
     question:"what do Arabs like the most?",
     answer:"cars"
   },{
     question:"Is there overspeed cameras in Saudi arabia?",
     answer:"yes"
   },{
     question:"What is the overspeed limit in highways?",
     answer:"140"
   },{
     question:"Is there a lulu in Saudi Arabia?",
     answer:"yes"
   }];
    var highscore=[{
        name:"henry",
       score:"8"
    },{
        name:"khalid",
        score:"3"

 },{
    name:"firoz",
    score:"5"
 }];
   
   
  // loop
   for(var i=0;i<question.length;i++){
     var currentquestion=question[i];
     play(currentquestion.question,currentquestion.answer);

   }
   function high(){

     console.log("Thank you for playing this your final score is:"+score);
     for (var i=0;i<highscore.length;i++){
        var s=highscore[i];
     }
      if (score>s.score){
        console.log("you have beaten the best score");
        // extra
        console.log("henry"+s.score+" and you have scored full"+score );
      }else{
        console.log("you couldnt beat the best score");
      }
     
   }
  high();
  play();
  