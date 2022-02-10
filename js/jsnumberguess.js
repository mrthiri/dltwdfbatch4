// UI
const minnum=document.querySelector('.minnumber'),
     maxnum=document.querySelector('.maxnumber'),
     guessinput=document.querySelector('#guessinput'),
     guessbtn=document.querySelector('#guessbtn'),
     message1=document.querySelector('.message1'),
     message2=document.querySelector('.message2'),
     game=document.querySelector('#game');

     // Game Value
     let min=1,
         max=10,
         gameleft=3,
         winningnum=getrandomnum(min,max);

    minnum.textContent=min;
    maxnum.innerText=max;

    guessbtn.addEventListener('click',function(){
    	// console.log('hay');
    	// console.log(guessinput.value);

    	let guess =parseInt(guessinput.value);
    	// console.log(guess);
    	// console.log(typeof guess);

    	if(guess < min || guess > max || isNaN(guess)){
    		// console.log(`Please enter a number between ${min} to ${max}`);
            // message2.innerText="Please enter a number between ${min} to ${max}";
           

            setmessage2(`Please enter a number between ${min} to ${max}`,"red");
    	}

        if(guess === winningnum){
            // Gameover WON

            // disable input
            // guessinput.disabled=true;
            // border color
            // guessinput.style.borderColor="green";
            // message 1
            // message1.innerText=`${winningnum} is correct!,You Won`;

          // setmessage1(`${winningnum} is correct!You won`,"green");
          //   // play again
          //   guessbtn.value="Play Again";

         gameover(true,`${winningnum} is correct! You Won`);

        }else{
            // Wrong Number
            
             // gameleft-=1;
             gameleft--;

            if(gameleft === 0){
                // Gameover Lost

                // disabled input
                // guessinput.disabled=true;
                // border color
                // guessinput.style.borderColor="red";
                // message
                // setmessage1(`Game Over,You Lost,The correct number was ${winningnum}`);
                // play again
                // guessbtn.value="Play Again";

                gameover(false,`Game Over,You Lost,The correct number was ${winningnum}`);
            }else{
                // Game Continue

                // border color
                guessinput.style.borderColor="red";
                // clear input
                guessinput.value='';
                // message
                setmessage1(`${guess} is not correct,${gameleft} guess left`,"red");
            }
        }


    });

    // Message

    function setmessage1(msg,color){
        message1.textContent=msg;
        message1.style.color=color;
    }

    function setmessage2(msg,color){
       message2.textContent = msg;
       message2.style.color=color;
       

       setTimeout(function(){
       	message2.textContent='';
       },2000);
    }

    // Gameover
    function gameover(won,msg){
        let color;

        won === true ? color="green" : color="red";

        // disable input
        guessinput.disabled=true;
        // border color
        guessinput.style.borderColor=color;
        // message
        setmessage1(msg,color);
        // play again ?
        guessbtn.value='Play Again';

        // add class
        guessbtn.classList.add('play-again');
    }

    // Play Again
game.addEventListener('mouseup',(e)=>{
    // console.log(e.target);

    if(e.target.className === "guessbtn play-again"){
        window.location.reload();
    }
});

// winning number
function getrandomnum(min,max){
  
  let rdmnumber = Math.floor(Math.random() * (max-min)+1);
  // console.log(rdmnumber);
  return rdmnumber;
}