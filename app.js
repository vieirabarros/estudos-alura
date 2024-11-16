let secretNumber = parseInt(Math.random()*30)+1;
console.log(`Expected answer: ${secretNumber}`);
let guessNumber;
let avaliableTryes = 3; 
let tryesLeftWord;

alert('Welcome to the game');


while (guessNumber != secretNumber){
    guessNumber = prompt('Choose a number between 1 and 30');
    if (isNaN(guessNumber)) {
        alert('Please enter a valid number.');
        continue;
      }
    avaliableTryes=avaliableTryes-1
    tryesLeftWord = avaliableTryes > 1? 'tryes':'try';
    console.log (`You have ${avaliableTryes} ${tryesLeftWord} left`)
    if (guessNumber==secretNumber){
            alert(`Right on the spot! The answer is ${secretNumber}, you've find it with ${avaliableTryes} ${tryesLeftWord} left` );
    }
    else {
            if (avaliableTryes>0){
                if (guessNumber<secretNumber){
                    alert(`Wrong answer, try a number higher than ${guessNumber} (${avaliableTryes} ${tryesLeftWord} left)`);
                }
                else{
                    alert(`Wrong answer, try a number lower than ${guessNumber} (${avaliableTryes} ${tryesLeftWord} left)`);
                }
            }
            else {
                alert(`You're left of tryes`);
                break;
        }        
    }    

            

}




    