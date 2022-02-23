const { tsParticles } = require("tsparticles");

function scuberGreetingForFeet(number){
 if (number<= 400) {
   return 'This one is on me!'
 } else if (number>=2000 && number <=2499) 
     return 'I will gladly take your thirty bucks.'
   else (number>=2500) 
     return 'No can do.'
   }
 
  // Write your code here!

function ternaryCheckCity(blah){
  // Write your code here!
  const city = blah;
  const cityMemo = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return cityMemo;


}

function switchOnCharmFromTip(tipString){
  // Write your code here!
  switch(tipString){
    case "generous":
      return "Thank you so much."
      case "not as generous":
      return "Thank you."
      case "thanks for everything":
return "Bye."
}
}