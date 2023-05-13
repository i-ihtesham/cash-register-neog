let billAmt = document.querySelector("#bill-amt")
let nextBtn = document.querySelector("#next");
let cashAmt = document.querySelector("#cash-amt");
let returnChangeBtn = document.querySelector("#retrn");
let cashDisplay = document.querySelector(".cash")
let errorMsg = document.querySelector(".error");
let output = document.querySelector(".output");
let notes = document.querySelectorAll(".noofNotes");
let value = [2000,500,100,50,20,10,5,2,1];

function hide(){
    cashDisplay.style.display = "none";
    output.style.display = "none";
    errorMsg.style.display = "none";
}

function show(){
    cashDisplay.style.display = "block";
}
function showError(text){
    errorMsg.style.display = "block";
    errorMsg.innerText = text;
}
nextBtn.addEventListener("click",()=>{
    hide();
    if(Number(billAmt.value) >0){
        show();
    }
    else{
        showError("Enter valid bill amount");
    }
})

returnChangeBtn.addEventListener("click",()=>{
    if(Number(billAmt.value) > 0 && Number(cashAmt.value) > 0 && Number(billAmt.value) < Number(cashAmt.value))
    {
        let returnAmout = cashAmt.value - billAmt.value;
        output.style.display = "block";
        calculate(returnAmout);
    }
    else{
        showError("Enter valid cash amount");
    }
})

function calculate(amount){
    for(let i=0; i<value.length;i++){
        let nt = Math.trunc(amount/value[i]);
        amount = amount%value[i];
        if(nt == 0){
            notes[i].innerText = "";
        }
        else{
            notes[i].innerText = nt;
        }
    }
}
hide();
