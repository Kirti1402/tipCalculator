const inputBill = document.querySelector('#bill');
const fivePer =  document.querySelector('#five-per')
const tenPer =  document.querySelector('#ten-per')
const fifteenPer =  document.querySelector('#fifteen-per')
const twentyPer =  document.querySelector('#twenty-five-per')
const  fiftyPer =  document.querySelector('#fifty-per')
const  custom =  document.querySelector('#custom')


function tipPercentage(perc){
    perc = perc.value;
    console.log(perc);
    let tipAmountCalculated;
    let billAmount = inputBill.value;
    if(billAmount == ''){
        console.log('Please enter input bill')
    }else{
        tipAmountCalculated = calculateTipAmount(perc,billAmount)
        console.log(tipAmountCalculated)
    }
}

function calculateTipAmount(amountPer, billAmount){
    let tipAmountPerPerson
    tipAmountPerPerson =  (amountPer/100) * billAmount;
    console.log(tipAmountPerPerson)
}


fivePer.addEventListener('click', () => tipPercentage(fivePer));