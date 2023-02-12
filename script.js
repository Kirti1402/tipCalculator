const inputBill = document.querySelector('#bill');
const fivePer =  document.querySelector('#five-per')
const tenPer =  document.querySelector('#ten-per')
const fifteenPer =  document.querySelector('#fifteen-per')
const twentyPer =  document.querySelector('#twenty-five-per')
const  fiftyPer =  document.querySelector('#fifty-per')
const  custom =  document.querySelector('#custom')
const totalPeople = document.querySelector('#noOfPeople')

let tipAmountCalculated;
function tipPercentage(perc){
    perc = perc.value;
    console.log(perc);
    let billAmount = inputBill.value;
    if(billAmount == ''){
        console.log('Please enter input bill')
    }else{
        tipAmountCalculated = calculatetotalTipAmount(perc,billAmount)
        console.log(tipAmountCalculated)
    }
}

function calculatetotalTipAmount(amountPer, billAmount){
    let tipAmountPerPerson
    tipAmountPerPerson =  (amountPer/100) * billAmount;
    return tipAmountPerPerson
}

function splitTips(){
    let noOfPeople ;
    noOfPeople = totalPeople.value;
    console.log(noOfPeople);
    tipPerPerson = tipAmountCalculated / noOfPeople;
    console.log(tipPerPerson)
}

fivePer.addEventListener('click', () => tipPercentage(fivePer));
totalPeople.addEventListener('onchange',splitTips);