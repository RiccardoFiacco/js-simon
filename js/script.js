//---------------------------------------------------------
//------------FUNCTION------------------------------------
//---------------------------------------------------------
function randomIntBetween(numOne, numTwo) {
  const flagUno = isNaN(numOne);
  const flagDue = isNaN(numTwo);
  let max, min;
  if (!flagUno && !flagDue) {
    if (numOne >= numTwo) {
      max = numOne;
      min = numTwo;
    } else {
      max = numTwo;
      min = numOne;
    }
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  } else {
    return "non un numero";
  }
}


function numberCreation() {
  let arrayNum = [];   
  do{
    let num = randomIntBetween(1, 50);
    if(!arrayNum.includes(num)) {
        numbers.innerHTML += 
        `<div class="col fs-1">
            <p>${num}<p>  
        </div>`;
        arrayNum.push(num);
        console.log(num);
        console.log(arrayNum)
    }
  }while(arrayNum.length < 5)
  return arrayNum;
}


function checkNumbers(arr,list){    
    let counter = 0;
    let arrayNotDouble=[];
    for(let i=0; i< list.length; i++){
        for(let j=0; j<arr.length;j++){
           if(parseInt(list[i].value) === arr[j] && !arrayNotDouble.includes(list[i].value)){
                counter++;
                arrayNotDouble.push(list[i].value);
           }
        }
    }
    return counter;
}


//con questa funzione faccio apparire il from nascosto
function changingDom(countdown, form, numbers, instructions) {
  //faccio vedere le caselle e il tasto
  form.className = " ";
  //nascondo i numeri
  numbers.className = "d-none";
  //nascondo il timer
  countdown.className = "d-none";
  //modifico cosa è scritto a video
  instructions.innerText = "immetti i numeri che ricordi";
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

//imposto il timer a 10 e lo faccio vedere subitop a schermo
let retroCounter = 1;
countdown.innerText = retroCounter;

const id = setInterval(function () {
  //decrcremento e passo valore da stampare a video
  countdown.innerText = --retroCounter;
  //quando il counter ha raggiunto zero stoppo il timer
  if (retroCounter == 0) {
    clearInterval(id);
    //passo gli elementi del dom che voglio modificare
    changingDom(countdown, hiddenForm, numberHide, instructions);
  }
}, 1000);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(array);
  //prendo tutti gli elmenti dell'input group
  let nodeList = document.querySelectorAll("#input-group input");
  //conto quante occorrenze ci sono
  let counter = checkNumbers(array, nodeList);

  if(counter==5){
    message.innerText  =" ";
    message.className = "text-success fs-1 text-center";
    message.innerText +="hai indovinato tutti i numeri!";
  }else if(counter<1){
    message.innerText  =" ";
    message.className = "text-danger fs-1 text-center";
    message.innerText +="hai indovinato 0 numeri!"
  }else{
    message.innerText  =" ";
    message.className = "fs-1 text-center";
    message.innerText +="hai indovinato "+counter+" numeri!"
  }
});

cleanButton.addEventListener("click", function (event) {
    event.preventDefault();
    const r = document.getElementById("refresh");
    console.log(r)
    r.remove();
});
