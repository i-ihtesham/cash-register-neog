const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const check = document.querySelector("#btn-check")
const errorMessage = document.querySelector("#error-message")
const noteValue = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".notes");
check.addEventListener("click", function process(){
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountReturn = cashGiven.value - billAmount.value;
            changeReturn(amountReturn);
            
        }else{
            
            showMessage("Cash given is less than bill amount")
        }
    }else{
        
        showMessage("Enter value greater than 0")
    }
})

function changeReturn(amountReturn){
    for(let i = 0; i<noteValue.length ; i++){
        const noNote = Math.trunc(amountReturn/noteValue[i]);
        amountReturn = amountReturn % noteValue[i];
        noOfNotes[i].innerText = noNote;
    }
}
function showMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}