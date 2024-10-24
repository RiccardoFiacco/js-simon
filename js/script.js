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
    let arrayNum=[];
    for(let i = 0; i< 5; i++){
        let num=randomIntBetween(1,50);
        numbers.innerHTML+= 
            `<div class="col fs-1">
                <p>${num}<p>  
            </div>`;
        arrayNum.push(num);
    }
    return arrayNum;
}

//con questa funzione faccio apparire il from nascosto
function creationGame(countdown, form, numbers, instructions){
    //faccio vedere le caselle e il tasto
    form.className= " ";
    //nascondo i numeri
    numbers.className= "d-none";
    //nascondo il timer
    countdown.className= "d-none";
    //modifico cosa è scritto a video
    instructions.innerText = 'immetti i numeri che ricordi';
}
//---------------------------------------------------------
//------------MAIN CODE------------------------------------
//---------------------------------------------------------

//mi vado a prendere tutti gli elementi di mio interesse
const form = document.getElementById("answers-form");
const countdown = document.getElementById("countdown");
const numberHide = document.getElementById("numbers");
const hiddenForm = document.getElementById("answers-form");
const instructions = document.getElementById("instructions");

//creo i numeri
const array = numberCreation();

//imposto il timer a 20 e lo faccio vedere subitop a schermo
let retroCounter = 1; 
countdown.innerText =retroCounter;

const id = setInterval(function(){   
    //decrcremento e passo valore da stampare a video    
    countdown.innerText = --retroCounter;
    //quando il counter ha raggiunto zero stoppo il timer
    if(retroCounter==0){
      clearInterval(id); 
      //passo gli elementi del dom che voglio modificare
      creationGame(countdown,hiddenForm, numberHide, instructions);
    }
},1000)

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(array)
    //checkNumbers(array);
    let input1 = document.getElementById("input-one").value;
    let input2 = document.getElementById("input-two").value;
    let input3 = document.getElementById("input-three").value;
    let input4 = document.getElementById("input-four").value;
    let input5 = document.getElementById("input-five").value;
    console.log(input1, input2, input3, input4, input5);
})