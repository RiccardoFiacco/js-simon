//---------------------------------------------------------
//------------FUNCTION------------------------------------
//---------------------------------------------------------
function randomIntBetween(numOne, numTwo){
    const flagUno = isNaN(numOne);
    const flagDue = isNaN(numTwo);
    let max, min;
    if(!flagUno && !flagDue){
         if(numOne>=numTwo){
            max= numOne;
            min = numTwo;
         }else{
            max = numTwo;
            min = numOne;
         }
         const random = Math.floor(Math.random()*(max-min+1) +min);
         return random
    }else{
         return("non un numero")
    }
}
function numberCreation(){
    for(let i = 0; i< 5; i++){
        numbers.innerHTML+= 
            `<div class="col fs-1">
                <p>${randomIntBetween(1,50)}<p>  
            </div>`;
        }
}
function timer(el){
    //imposto il timer a 20 e lo faccio vedere subitop a schermo
    let retroCounter = 5; 
    el.innerText =retroCounter;
    //decremento il tempo per ogni secondo
    setInterval(function(){       
        el.innerText = retroCounter--;

    },1000)
    
}
//---------------------------------------------------------
//------------MAIN CODE------------------------------------
//---------------------------------------------------------
const form = document.getElementById("form");
const countdown = document.getElementById("countdown");
console.log(countdown)
numberCreation();
timer(countdown);










// form.addEventListener("submit", function (event) {
//   event.preventDefault();


// })