function shout(string) {
  return string.toUpperCase();

}

function whisper(string){
  return string.toLowerCase();
}

const greet = "Hello";
function logShout(greet){
  console.log(greet.toUpperCase());
}

const greet2 = "HY";
function logWhisper(greet2){
  console.log(greet2.toLowerCase());
}




function sayHiToHeadphonedRoommate(string){
   if (string === string.toLowerCase()){
    return(string ? "I can\'t hear you!" : "YES INDEED!" );
  
   } 
    else if (string === string.toUpperCase()){
      return(string ? "YES INDEED!" : "I can\'t hear you!" );
   } 
    else if (string === "Let's have dinner together!"){
      return("I would love to!");
    }


}






