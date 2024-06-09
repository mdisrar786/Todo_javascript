document.querySelector("#increment").addEventListener('click',incrementCounter);
document.querySelector("#decrement").addEventListener('click',decrementCounter);
document.querySelector("#reset").addEventListener('click',resetCounter);


let counterDisplay=document.querySelector('#counterDisplay');
let counterValue=0;

function updateCounterDisplay(){
counterDisplay.textContent=counterValue
}


function incrementCounter(){
counterValue++;
updateCounterDisplay()
}

function decrementCounter(){
    if(counterValue>0){
        counterValue--;
        updateCounterDisplay()
    }
  
}

function resetCounter(){
    counterValue=0;
    updateCounterDisplay()
}