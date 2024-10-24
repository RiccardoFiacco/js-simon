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
//con questa funzione faccio apparire il from nascosto
function creationGame(){
    const hiddenForm = document.getElementById("answers-form");
    console.log(hiddenForm);
    hiddenForm.className= " ";
}
//---------------------------------------------------------
//------------MAIN CODE------------------------------------
//---------------------------------------------------------
const form = document.getElementById("form");
const countdown = document.getElementById("countdown");

//creo i numeri
numberCreation();

//imposto il timer a 20 e lo faccio vedere subitop a schermo
let retroCounter = 2; 
countdown.innerText =retroCounter;

const id = setInterval(function(){   
    //decrcremento e passo valore da stampare a video    
    countdown.innerText = --retroCounter;
    //quando il counter ha raggiunto zero stoppo il timer
    if(retroCounter==0){
      clearInterval(id); 
      creationGame();
    }
},1000)










// form.addEventListener("submit", function (event) {
//   event.preventDefault();


// })